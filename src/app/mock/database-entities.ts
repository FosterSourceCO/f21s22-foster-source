import { PhoneNumber, PhoneNumbersRes, PhoneNumberType } from '../models/phonenumber.model';
import { Announcement, GetAnnouncementsRes } from '../models/announcement.model';
import { Account, Token, CreateAccountRequest } from '../models/account.model';
import { Availability, AvailabilityType } from '../models/availability.model';
import { AddressRes, SimpleAddressReq } from '../models/adress.model';
import { FullProfileRes } from '../models/get-profile-by-id.models';
import { BlacklistedUser } from '../models/blacklisted-user.model';
import { SmallProfile } from '../models/small-profile.model';
import { Applicant } from '../models/applicant.model';
import { BugReport } from '../models/bug.model';
import { Photo } from '../models/profile.model';
import { User } from '../models/user.model';
import {
  ForumStats,
  FullThread,
  Reply,
  ReplyReport,
  ThreadReport,
  ThreadSummary,
  Topic,
  TopicSummary,
} from '../models/forum.models';

const announcements: Announcement[] = [
  {
    id: 1,
    datePosted: new Date(),
    account: {
      firstName: 'Tim',
      lastName: 'Cook',
    },
    title: 'This is the first announcement!',
    bodyHtml: `
    <b>this should be some bold text...</b>
    <div>Also it has a div!</div>
    `,
  },
  {
    id: 2,
    datePosted: new Date(),
    account: {
      firstName: 'Jake',
      lastName: 'Paul',
    },
    title: 'Christmas Party',
    bodyHtml: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `,
  },
  {
    id: 3,
    datePosted: new Date(),
    account: {
      firstName: 'Penelope',
      lastName: 'Smith',
    },
    title: 'This is really important!',
    bodyHtml: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <b>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui </b> officia deserunt mollit anim id est laborum.</p> <img src="https://fostersource.org/wp-content/uploads/2020/07/team1.jpg" width="589px">
    `,
  },
];

const getAnnouncementResponses: GetAnnouncementsRes[] = [{ announcements: announcements }];

export const simpleAddresses: SimpleAddressReq[] = [
  {
    addressLine1: '1002 fake st.',
    city: 'Denver',
    zipcode: '80210',
    state: 'CO',
  },
];

export const addresses: AddressRes[] = [
  {
    addressLine1: '1002 fake st.',
    city: 'Denver',
    zipcode: '80210',
    state: 'CO',
    country: 'USA',
    latitude: 42,
    longitude: 44,
  },
];

export const createAccountRequests: CreateAccountRequest[] = [
  {
    id: 'sgnjksfdkk',
    certExpiry: '10/31/2022',
  },
];

// export const cookies: Token[] = [
//   {
//     id: 'ABZ13lnm54ak0sd',
//     privilegeLevel: 1,
//     exp: 12341235,
//     iat: 123412341,
//   },
// ];

export const tokenString = `eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NywicHJpdmlsZWdlTGV2ZWwiOiIzIiwiaWF0IjoxNjM2OTMyNDQzLCJleHAiOjE2Mzc5OTg4OTN9.Qgl84ZWtv9P6u14DTxoZ8lwspcyV3tR4RrMmqX63XTQ`;

export const accounts: Account[] = [
  {
    id: 'ABZ13lnm54ak0sd',
    certExpiry: new Date('10/31/2032'),
    lastLogin: new Date(),
    profileCompleted: true,
  },
  {
    id: 'sgnjdknfkjsnfs',
    certExpiry: new Date('10/31/2032'),
    lastLogin: new Date(),
    profileCompleted: true,
  },
];

const users: User[] = [
  {
    id: 'asdfghjkl',
    firstName: 'John',
    lastName: 'Doe',
  },
];

// const applicants: Applicant[] = [
//   {
//     id: 1,
//     name: 'Tim Cook',
//     email: 'tim.cook@apple.com',
//     caseWorkerName: 'Gina White',
//     caseWorkerEmail: 'gwhite@colorado.gov',
//     dateApplied: new Date(),
//   },
//   {
//     id: 2,
//     name: 'John Denver',
//     email: 'jdenver2@gmail.com',
//     caseWorkerName: 'Sam Smith',
//     caseWorkerEmail: 'sam.smith@colorado.gov',
//     dateApplied: new Date(),
//   },
//   {
//     id: 3,
//     name: 'Michelle Obama',
//     email: 'mobama@whitehouse.gov',
//     caseWorkerName: 'Gina White',
//     caseWorkerEmail: 'gwhite@colorado.gov',
//     dateApplied: new Date(),
//   },
//   {
//     id: 4,
//     name: 'Tim Cook',
//     email: 'tim.cook@apple.com',
//     caseWorkerName: 'Gina White',
//     caseWorkerEmail: 'gwhite@colorado.gov',
//     dateApplied: new Date(),
//   },
//   {
//     id: 5,
//     name: 'John Denver',
//     email: 'jdenver2@gmail.com',
//     caseWorkerName: 'Sam Smith',
//     caseWorkerEmail: 'sam.smith@colorado.gov',
//     dateApplied: new Date(),
//   },
//   {
//     id: 6,
//     name: 'Michelle Obama',
//     email: 'mobama@whitehouse.gov',
//     caseWorkerName: 'Gina White',
//     caseWorkerEmail: 'gwhite@colorado.gov',
//     dateApplied: new Date(),
//   },
// ];

export const photos: Photo[] = [
  {
    id: 1,
    photoAWSKey: 'AWS_KEY',
  },
];

const blacklist: BlacklistedUser[] = [
  {
    firstName: 'John',
    lastName: 'Smith',
    email: 'josh.smith@aol.com',
    phoneNumber: '(720) 822-9918',
    bannedByAccount: {
      id: 1,
      firstName: 'Jett',
      lastName: 'Crowson',
    },
    date: new Date(),
    reason: 'Josh is not even from Colorado, but will not stop applying.',
  },
  {
    firstName: 'amy',
    lastName: 'green',
    email: 'amygirl1111@aol.com',
    phoneNumber: '(720) 221-9887',
    bannedByAccount: {
      id: 2,
      firstName: 'Joe',
      lastName: 'Biden',
    },
    date: new Date(),
    reason: 'Amy is honestly just not a vibe.',
  },
  {
    firstName: 'Bill',
    lastName: 'Gates',
    email: 'bill@microsoft.com',
    phoneNumber: '(315) 883-1182',
    bannedByAccount: {
      id: 1,
      firstName: 'Jett',
      lastName: 'Crowson',
    },
    date: new Date(),
    reason:
      'I have no idea why Bill Gates would be banned from this site, but here we are... Here is some more information about the ban just to check out if the text wraps in an aesthetically pleasing way.',
  },
];
export const primaryAvailabilities: Availability[] = [
  {
    id: 1,
    type: AvailabilityType.PRIMARY,
    monday: [true, true, true, false],
    tuesday: [false, true, true, false],
    wednesday: [true, true, true, false],
    thursday: [true, true, false, false],
    friday: [true, true, true, false],
    saturday: [false, true, true, true],
    sunday: [false, true, true, true],
  },
];

export const temporaryAvailabilities: Availability[] = [
  {
    id: 2,
    type: AvailabilityType.TEMPORARY,
    monday: [true, true, true, false],
    tuesday: [false, true, true, false],
    wednesday: [true, true, true, false],
    thursday: [true, true, false, false],
    friday: [true, true, true, false],
    saturday: [false, true, true, true],
    sunday: [false, true, true, true],
    startDate: new Date(),
    endDate: new Date(),
  },
];

export const mobilePhones: PhoneNumber[] = [
  {
    phoneNumber: '+17209938821',
    type: PhoneNumberType.Mobile,
  },
];

export const phoneNumbersRes: PhoneNumbersRes[] = [
  {
    primaryPhoneNumber: {
      phoneNumber: '+17209938821',
      type: PhoneNumberType.Mobile,
    },
    secondaryPhoneNumber: {
      phoneNumber: '+3033467754',
      type: PhoneNumberType.Home,
    },
  },
];

export const profiles: FullProfileRes[] = [
  {
    id: 1,
    biography:
      'Hi! My name is Jace Jackson and Im very passionate about childcare. Ive been fostering children for 12 years and I hope to be doing it for the rest of my life. Im very active, I love to ski, and I have 3 dogs that love kids too.',
    preferredName: 'Jace Jackson',
    dob: new Date(),
    profileLargeAwsKey: 'blank-profile-image',
    profileSmallAwsKey: 'blank-profile-image',
    gender: 'male',
    pronouns: 'he/his',
    maritalStatus: 'single',
    accountId: 1,
    householdBackground: {
      id: 1,
      parentalUnitSize: 2,
      householdSize: 4,
      childrenInHousehold: 2,
      childrenInfo: '12, female, biological\n 14 male, adopted',
      vehicleAccess: true,
      lgbtCareExperience: true,
      caredForPhysDisabled: true,
      caredForIntelDisabled: true,
      caredForMedicallyFragile: true,
      ownsFirearm: true,
      petInfo: 'Two dogs and a cat',
      additionalDetails: 'I am so allergic to peanuts',
    },
    respiteBackground: {
      id: 1,
      fosterYearsExperience: 1,
      totalChildrenCaredFor: 10,
      canProvideRespite: true,
      lookingForRespite: true,
      respiteProviderInfo: {
        id: 1,
        cityCanProvideRespiteIn: 'boulder',
        respiteTravelDistance: 100,
        careForMinAge: 0,
        careForMaxAge: 10,
        maxNumCareFor: 3,
        availabilities: [
          {
            id: 1,
            type: AvailabilityType.PRIMARY,
            monday: [true, false, false, false],
            tuesday: [false, true, true, true],
            wednesday: [true, false, false, false],
            thursday: [false, true, true, true],
            friday: [true, false, false, false],
            saturday: [false, true, true, true],
            sunday: [true, false, false, false],
          },
          {
            id: 2,
            type: AvailabilityType.TEMPORARY,
            monday: [true, false, false, false],
            tuesday: [false, true, true, true],
            wednesday: [true, false, false, false],
            thursday: [false, true, true, true],
            friday: [true, false, true, true],
            saturday: [false, true, true, true],
            sunday: [false, false, false, false],
            startDate: new Date(),
            endDate: new Date(),
          },
        ],
      },
    },
    photos: [],
    // secAccountHolder: {
    //   id: 1,
    //   relationshipToPrimary: 'met once in an airport',
    //   firstName: 'Tommy',
    //   lastName: 'Bahama',
    //   gender: 'male',
    //   email: 'tbahama@tommyb.com',
    //   preferredName: 'Tom',
    //   maritalStatus: 'Married',
    //   secAccountHolderPhone: {
    //     id: 1,
    //     phoneNumber: '+17207738882',
    //     type: PhoneNumberType.Home,
    //   },
    // },
    account: {
      lastLogin: new Date(),
    },
  },
];

export { announcements, getAnnouncementResponses, users, blacklist };

export const searchResults: SmallProfile[] = [
  {
    preferredName: 'Paul',
    account: {
      username: 'Paulyboy123',
      address: {
        distance: 10.55,
      },
    },
    id: 1,
    profileLargeAwsKey: 'largeKey',
  },
  {
    preferredName: 'Jett',
    account: {
      username: 'jcrowson',
      address: {
        distance: 14.15,
      },
    },
    id: 1,
    profileLargeAwsKey: 'largeKey',
  },
  {
    preferredName: 'Gina Smith',
    account: {
      username: 'ginasmithmane',
      address: {
        distance: 21.09,
      },
    },
    id: 1,
    profileLargeAwsKey: 'largeKey',
  },
];

export const bugs: BugReport[] = [
  {
    id: 1,
    description: 'This is the description of the bug',
    environment: 'Mozilla Firefox VERSION etc.',
    url: 'https://respite.fostersource.org/user/10',
    stepsToReproduce: 'Navigate to the profile page',
    createdAt: new Date(),
  },
  {
    id: 2,
    description: 'Another nasty bug',
    environment: 'Mobile device iOS10.32.1',
    url: 'https://respite.fostersource.org/respite-search',
    createdAt: new Date(),
  },
  {
    id: 3,
    description:
      'This ones not that bad, but the user is picky. This is a long bug report just to see how the text wraps. This ones not that bad, but the user is picky. This is a long bug report just to see how the text wraps.',
    environment: 'Chrome OS 10.3.2.112.3',
    stepsToReproduce: 'Try to use medically fragile filter on respite search',
    createdAt: new Date(),
  },
];

export const topics: Topic[] = [
  {
    id: 1,
    title: 'General Discussion',
    description: 'Talk about whatever and build your sense of community.',
  },
  {
    id: 2,
    title: 'Foster Parenting',
    description: 'For all questions, advice, and discussion regarding being or becoming a foster parent.',
  },
  {
    id: 2,
    title: 'Movies',
    description:
      'Not really sure why there would be a movie topic, but maybe foster parents just really really love movies and need a place to talk about them. This will also be a fairly large description as to fill up some more space than the others and make sure that it still looks good.',
  },
];

export const topicSummaries: TopicSummary[] = topics.map((t) => {
  return { ...t, threadCount: parseInt((Math.random() * (100 - 50 + 1) + 50).toString()), lastPostDate: new Date() };
});

export const threadSummaries: ThreadSummary[] = [
  {
    id: 1,
    likes: 15,
    title: 'This is a thread and it is awesome. Anyone else?',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, ligula at dignissim finibus, ante nisi consequat est, sit amet tincidunt turpis odio et velit. Nullam eget condimentum neque, ut tincidunt enim. Aenean at varius nibh. Vestibulum quam tellus, laoreet ut cursus in, lacinia id lectus. Nullam egestas libero sit amet egestas hendrerit. Donec rutrum ultrices ex, sit amet porttitor erat hendrerit in. Aenean rhoncus enim nec est blandit pulvinar. Duis consequat vehicula felis, ac maximus dolor euismod vel. Pellentesque eu nulla neque. Vestibulum non ex sit amet tellus sagittis mattis vel id dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae magna euismod diam ornare ornare. Nunc id ex blandit, ultricies turpis eu, porta sapien. Proin ultricies eu dui nec egestas.',
    edited: false,
    createdAt: new Date(),
    replyCount: 9,
    lastReplyDate: new Date(),
    topicTitle: 'Parenting 101 Topic',
    requesterHasLiked: true,
    account: {
      id: 'ABZ13lnm54ak0sd',
      username: 'respiteuser1',
      privilege: 'USER',
      profileId: 2,
    },
  },
  {
    id: 2,
    likes: 10291,
    title: 'Does anyone else like to hang out',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, ligula at dignissim finibus, ante nisi consequat est, sit amet tincidunt turpis odio et velit. Nullam eget condimentum neque, ut tincidunt enim. Aenean at varius nibh. Vestibulum quam tellus, laoreet ut cursus in, lacinia id lectus. Nullam egestas libero sit amet egestas hendrerit. Donec rutrum ultrices ex, sit amet porttitor erat hendrerit in. Aenean rhoncus enim nec est blandit pulvinar. Duis consequat vehicula felis, ac maximus dolor euismod vel. Pellentesque eu nulla neque. Vestibulum non ex sit amet tellus sagittis mattis vel id dolor. Pellentesque habitant morbi.',
    edited: false,
    createdAt: new Date(),
    replyCount: 104,
    lastReplyDate: new Date(),
    topicTitle: 'General Discussion',
    requesterHasLiked: false,

    account: {
      id: 'ABZ13lnm54ak0sd',
      username: 'iAmLegend3',
      privilege: 'USER',
      profileId: 3,
    },
  },
  {
    id: 3,
    likes: 4,
    title: 'Welcome to the forum. Be nice!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, ligula at dignissim finibus, ante nisi consequat est, sit amet tincidunt turpis odio et velit. Nullam eget condimentum neque, ut tincidunt enim. Aenean at varius nibh. Vestibulum quam tellus, laoreet ut cursus in, lacinia id lectus. Nullam egestas libero sit amet egestas hendrerit. Donec rutrum ultrices ex, sit amet porttitor erat hendrerit in. Aenean rhoncus enim nec est blandit pulvinar. Duis consequat vehicula felis, ac maximus dolor euismod vel. Pellentesque eu nulla neque. Vestibulum non ex sit amet tellus sagittis mattis vel id dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae magna euismod diam ornare ornare. Nunc id ex blandit, ultricies turpis eu, porta sapien. Proin ultricies eu dui nec egestas.',
    edited: false,
    createdAt: new Date(),
    replyCount: 3,
    lastReplyDate: new Date(),
    topicTitle: 'Parenting 101 Topic',
    requesterHasLiked: true,

    account: {
      id: 'ABZ13lnm54ak0sd',
      username: 'adminuser',
      privilege: 'MOD',
    },
  },
];

export const replies: Reply[] = [
  {
    id: 1,
    body: 'Suspendisse ornare et magna a molestie. Praesent tortor nisi, imperdiet gravida felis id, imperdiet dignissim risus.\n\nAliquam erat volutpat. Pellentesque rhoncus ligula non est fringilla congue. Suspendisse potenti. Nam lobortis mollis risus',
    likes: 4,
    replyingToText: 'Proin fermentum convallis justo elementum gravida. Nam fringilla euismod eleifend',
    replyingToUsername: 'usertoreplyto',
    edited: false,
    requesterHasLiked: true,
    createdAt: new Date(),
    threadId: 2,
    account: {
      id: 'ABZ13lnm54ak0sd',
      username: 'replyguy.1',
      privilege: 'USER',
      profileId: 2,
      profileSmallAwsKey: 'test',
    },
  },
  {
    id: 2,
    body: 'second this! smiley emoji.',
    likes: 102,
    edited: true,
    requesterHasLiked: true,
    createdAt: new Date(),
    threadId: 2,
    account: {
      id: 'sajkfdsnbkjgnkj',
      username: 'admin-man',
      privilege: 'ADMIN',
      profileSmallAwsKey: 'test',
    },
  },
  {
    id: 1,
    body: 'Mauris in lectus nec lacus lobortis cursus. Maecenas velit neque, accumsan at lacinia sed, tincidunt a urna. Integer ex felis, lacinia et ipsum non, fermentum semper dui. Donec in eros ipsum. Curabitur id enim libero. Quisque gravida viverra tortor, a rhoncus sapien ultricies a. In ipsum lacus, placerat nec tristique sed, laoreet sit amet velit. In et risus dapibus, lobortis purus non, varius neque. Phasellus viverra libero vitae enim semper, consequat venenatis nibh dignissim. Aliquam quis laoreet arcu. Aliquam a luctus est. Proin ac congue mi. Proin volutpat consectetur justo, eu varius turpis gravida in. In sed tincidunt tortor.',
    likes: 0,
    edited: false,
    requesterHasLiked: true,
    createdAt: new Date(),
    threadId: 2,
    account: {
      id: 'ask45kasd',
      username: 'randomdude',
      privilege: 'USER',
      profileId: 3,
      profileSmallAwsKey: 'test',
    },
  },
];

export const threadReports: ThreadReport[] = [];
export const replyReports: ReplyReport[] = [];

export const fullThreads: FullThread[] = threadSummaries.map((t) => {
  return { ...t, replies: replies, topicId: 1 };
});

export const forumStats: ForumStats[] = [
  {
    likes: 1003,
    threads: 14,
    replies: 882,
  },
];
