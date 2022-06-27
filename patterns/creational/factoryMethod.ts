interface Interviewer {
    askQuestions(): void;
}

class Developer implements Interviewer {
    public askQuestions(): void {
        console.log('Asking about design patterns!');
    }
}

class CommunityExecutive implements Interviewer {
    public askQuestions(): void {
        console.log('Asking about community building');
    }
}

abstract class HiringManager {
    protected abstract makeInterviewer(): Interviewer

    public takeInterview() {
        const interviwer = this.makeInterviewer()
        interviwer.askQuestions()
    }
}

class DevelopmentManager extends HiringManager {
    protected makeInterviewer(): Interviewer {
        return new Developer()
    }
}

class MarketingManager extends HiringManager {
    protected makeInterviewer(): Interviewer {
        return new CommunityExecutive()
    }
}

let devManager = new DevelopmentManager()
devManager.takeInterview()

let marketingManager = new MarketingManager()
marketingManager.takeInterview()