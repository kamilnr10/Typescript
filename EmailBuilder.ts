interface Mail {
    from: string;
    to: string;
    title: string;
    cc: string[];
    bcc: string[];
    html: string;
  }
  interface IMail {
    setFrom: (from: string) => object;
    setTo: (to: string) => object;
    setTitle: (title: string) => object;
    setCC: (...cc: string[]) => object;
    setBCC: (...bcc: string[]) => object;
    setHTML: (html: string) => object;
    buildMail: () => object;

  }
  
  class EmailBuilderr {
    private _mail: Mail;
  
    constructor() {
      this._mail = {
        from: "",
        to: "",
        title: "",
        cc: [],
        bcc: [],
        html: "",
      };
    }
    
  
    public setFrom(from: string): EmailBuilderr {
      this._mail.from = from;
      return this;
    }
  
    public setTo(to: string): EmailBuilderr {
      this._mail.to = to;
      return this;
    }
  
    public setTitle(title: string): EmailBuilderr {
      this._mail.title = title;
      return this;
    }
  
    public setCC(...cc: string[]): EmailBuilderr {
      this._mail.cc.push(...cc);
      return this;
    }
  
    public setBCC(...bcc: string[]): EmailBuilderr {
      this._mail.bcc.push(...bcc);
      return this;
    }
  
    public setHTML(html: string): EmailBuilderr {
      this._mail.html = html;
      return this;
    }
  
    public buildMail = (): EmailBuilderr => {
      if (!("from" in this)) throw new Error("From field is missing");
      if (!("to" in this)) throw new Error("To field is missing");
      if (!("title" in this)) throw new Error("Title field is missing");
      if (!("html" in this)) throw new Error("Html field is missing");
      
      return new EmailBuilderr()
      .setFrom(this._mail.from)
      .setTo(this._mail.to)
      .setTitle(this._mail.title)
      .setCC(...this._mail.cc)
      .setBCC(...this._mail.bcc)
      .setHTML(this._mail.html);
    }
  }
  