import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile-service/profile.service';
import { profileServiceProvider } from 'src/app/services/profile-service/profile.service.provider';

@Component({
  selector: 'app-public-user-page-component',
  templateUrl: './public-user-page-component.component.html',
  styleUrls: ['./public-user-page-component.component.css'],
  providers: [profileServiceProvider],
})
export class PublicUserPageComponentComponent implements OnInit {
  public selectedProfile: Profile;
  closeResult = ''; // how modal was closed
  toastService: any;
  constructor(private route: ActivatedRoute, private modalService: NgbModal, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfileById(1).subscribe(
      (p: Profile) => {
        this.selectedProfile = p;
      },
      (error) => {
        this.toastService.error('Failed to fetch latest announcement. Try reloading the page.', 'Error');
      }
    );
  }

  open(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        backdropClass: 'modal-background',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
