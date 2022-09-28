import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = "9a82b915d8d44e298448d5e025072dc4";
  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get("https://newsapi.org/v2/sources?language=en&apiKey="+this.apiKey);
  };

  getArticlesById(source: string) {
    return this.http.get("https://newsapi.org/v2/top-headlines?sources="+source+"&apiKey="+this.apiKey);
  };

  initArticles() {
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey="+this.apiKey);
  };
}
