import {Component, Input, OnChanges, SecurityContext, SimpleChange} from '@angular/core';
import {marked, Renderer} from 'marked';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import highlightjs from 'highlight.js';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnChanges {
  @Input() text = '';
  data!: SafeHtml;
  md: any;

  constructor(private sanitizer: DomSanitizer) {
    const renderer = new Renderer();
    renderer.code = MarkdownComponent.highlightCode;
    this.md = marked.setOptions({renderer});
  }

  static highlightCode(code: string, language: string): string {
    let addendum = ['<pre>', '</pre>'];
    if (!(language && highlightjs.getLanguage(language))) {
      language = 'markdown';
      addendum = ['', ''];
    }
    const result = highlightjs.highlight(code, {language}).value;
    return `${addendum[0]}<code class="hljs ${language}">${result}</code>${addendum[1]}`;
  }

  markdownToSafeHtml(value: string): SafeHtml {
    const html = this.md(value);
    const safeHtml = this.sanitizer.sanitize(SecurityContext.HTML, html);
    return safeHtml ? this.sanitizer.bypassSecurityTrustHtml(safeHtml) : '';
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (propName === 'text') {
        const value = changes[propName].currentValue;
        if (value) {
          this.data = this.markdownToSafeHtml(value);
        }
      }
    }
  }

}
