import { ProfileService } from './profile.service';
import { CreateProfileReq, GetProfilesRes, Profile, UpdateProfileReq } from '../../models/profile.model';
import { Observable, of } from 'rxjs';
import { profiles, searchResults } from '../../mock/database-entities';
import { FiltersReq } from '../../models/filters.model';
import { FullProfileRes, ProfileCompletionRes } from '../../models/get-profile-by-id.models';

export class ProfileMockService implements ProfileService {
  createProfile(params: CreateProfileReq): Observable<FullProfileRes> {
    return of(profiles[0]);
  }

  getProfileById(id: number): Observable<FullProfileRes> {
    return of(profiles[0]);
  }

  getProfiles(limit: number, offset: number, filters?: FiltersReq, searchTerm?: string): Observable<GetProfilesRes> {
    return of({
      profiles: searchResults,
      numResults: 200,
    });
  }

  updateProfile(params: UpdateProfileReq): Observable<FullProfileRes> {
    return of(profiles[0]);
  }

  currentProfileCompleted(): Observable<ProfileCompletionRes> {
    return of({ completed: true });
  }
}
