// interface Subject {
//     attach(observer: Observer): void;

//     detach(observer: Observer): void;

//     notify(): void;
// }

// interface Observer {
//     update(subject: Subject): void;
// }

// class JobPost {
//     protected title
//     public constructor(title: string) {
//         this.title = title
//     }

//     public getTitle(): string {
//         return this.title
//     }
// }

// class JobSeeker implements Observer {
//     protected name

//     public constructor(name: string) {
//         this.name = name
//     }

//     public onJobPosted(job: JobPost) {
//         console.log("Hi ", this.name, "! New Job posted: ", job.getTitle());
//     }
// }

// class EmploymentAgency {
//     protected observers = []

//     protected notify(jobPosting: JobPost) {
//         this.observers.forEach((element) => {
//             element.onJobPosted(jobPosting)
//         })
//     }

//     public attach(observer: any) {
//         this.observers.push(observer)
//     }

//     public addJob(jobPosting: JobPost) {
//         this.notify(jobPosting)
//     }
// } 