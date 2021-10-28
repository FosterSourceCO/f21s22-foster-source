import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../../services/database-service/database.service';
import { ToastService } from '../../services/toast-service/toast.service';
import {
  Announcement,
  GetAnnouncementsRes,
  PostAnnouncementRequest,
  PostAnnouncementResponse,
} from '../../models/announcement.model';
import { ToastPresets } from '../../models/toast.model';
import { HttpErrorResponse } from '@angular/common/http';
import { databaseServiceProvider } from '../../services/database-service/database.service.provider';
import { Router } from '@angular/router';
import { AnnouncementService } from '../../services/announcement-service/announcement.service';
import { announcementServiceProvider } from '../../services/announcement-service/announcement.service.provider';
@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
  providers: [databaseServiceProvider, announcementServiceProvider],
})
export class AnnouncementsComponent implements OnInit {
  public characterLimit = 2000;
  public richText = '';
  public title = '';
  public announcement: Announcement;
  public attemptingToPost = false;
  public pastAnnouncements: Announcement[] = [];

  constructor(
    private dbService: DatabaseService,
    private toastService: ToastService,
    private router: Router,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit(): void {
    this.announcementService.getAnnouncements().subscribe(
      (res: GetAnnouncementsRes) => {
        this.pastAnnouncements = res.announcements;
      },
      (err) => {
        this.toastService.show({
          body: 'Something went wrong trying to fetch past announcements.',
          preset: ToastPresets.ERROR,
        });
      }
    );
  }

  public postAnnouncement(): void {
    if (this.title.length === 0 || this.richText.length === 0) {
      this.toastService.show({
        body: 'Please enter a title and some body text.',
        preset: ToastPresets.ERROR,
      });
      return;
    }
    this.attemptingToPost = true;
    this.dbService
      .postAnnouncement({
        title: this.title,
        bodyHtml: this.richText,
      } as PostAnnouncementRequest)
      .subscribe(
        (res: PostAnnouncementResponse) => {
          if (res.error) {
            this.toastService.show({
              body: 'Something went wrong trying to post the announcement.',
              preset: ToastPresets.ERROR,
            });
          } else {
            this.toastService.show({
              body: `Successfully posted the announcement.`,
              preset: ToastPresets.SUCCESS,
            });
            this.reloadPage();
          }
        },
        (error: HttpErrorResponse) => {
          this.toastService.show({
            body: 'Something went wrong trying to post the announcement.',
            preset: ToastPresets.ERROR,
          });
        }
      );
  }

  public textChange(changes: string) {
    this.richText = changes;
    this.announcement = {
      id: -1,
      title: this.title,
      author: 'Your Name Here',
      bodyHTML: changes,
      date: new Date(),
    };
  }

  public updatePreview() {
    this.announcement = {
      id: -1,
      title: this.title,
      author: 'Your Name Here',
      bodyHTML: this.richText,
      date: new Date(),
    };
  }

  public reloadPage() {
    this.router
      .navigateByUrl('/admin', { skipLocationChange: true })
      .then(() => this.router.navigate(['/admin/announcements']));
  }
}
