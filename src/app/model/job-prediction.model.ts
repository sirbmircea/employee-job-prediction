export class JobPrediction {
    public jobTitle: string;
    public jobPrediction: number;
    constructor(title: string, prediction: number) {
      this.jobPrediction = prediction;
      this.jobTitle = title;
    }
  
    getTitle(): string {
      return this.jobTitle;
    }
  
    setTitle(title: string): void {
      this.jobTitle = title;
    }
  
    getprediction(): number {
      return this.jobPrediction;
    }
  
    setprediction(prediction: number): void {
      this.jobPrediction = prediction;
    }
  }