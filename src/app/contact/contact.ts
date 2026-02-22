import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit, OnDestroy {

  private revealObserver!: IntersectionObserver;

  faqs = [
    {
      question: 'What is your preferred time zone?',
      answer: "<b>I'm based in the Philippines.</b> I'm flexible and happy to schedule meetings that work across different time zones.",
      open: false
    },
    {
      question: 'Do you offer free consultations?',
      answer: "<b>Yes! I offer a free initial consultation</b> to discuss your project needs, goals, and how I can help bring your ideas to life.",
      open: false
    },
    {
      question: 'How do we start a project together?',
      answer: "Simply fill out the contact form or reach out via email. We'll set up a quick call to align on scope, timeline, and deliverables.",
      open: false
    }
  ];

  ngAfterViewInit(): void {
    setTimeout(() => this.setupScrollReveal(), 300);
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }

  private setupScrollReveal(): void {
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.revealObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up')
      .forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('in-view');
        } else {
          this.revealObserver.observe(el);
        }
      });
  }

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}