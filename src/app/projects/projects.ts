import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core'; 
import { Title, Meta } from '@angular/platform-browser'; 

interface Project {
  id: number;
  title: string;
  subtitle: string;
  role?: string;
  roleDesc?: string;
  description: string;
  techStack: string[];
  link: string;
  githubUrl?: string;
  figmaUrl?: string;
  thumbnail: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit, AfterViewInit, OnDestroy {

  private revealObserver!: IntersectionObserver;

  featuredProject: Project = {
    id: 1,
    title: 'FilSafe Enterprises',
    subtitle: 'Full-Stack Client Website',
    role: 'Frontend Developer | QA Tester',
    roleDesc: 'Designed web pages, and performed QA testing across all functions and backend',
    description: 'Hardcoded client website designed with complete backend and is SEO optimized',
    techStack: ['Angular', 'Node.js', 'MongoDB'],
    link: 'https://filsafe.shop/',
    featured: true,
    thumbnail: 'Filsafe-thumbnail.png',
    githubUrl:'https://github.com/Edtech-bit/FilSafeProject.git',
  };

  otherProjects: Project[] = [
    {
      id: 1,
      title: 'DoMore',
      subtitle: 'FULLSTACK PLANNER WEB APP',
      role:'Lead Frontend Developer',
      roleDesc:'Led the team on app architecture, flow, and UI/UX direction',
      description: 'A fullstack web-based planner system unifying task and file management into one seamless workspace',
      techStack: ['Angular', 'Express.js', 'MongoDB',],
      link: 'https://domore-student-planner.netlify.app',
      featured: true,
      thumbnail: 'DoMore-thumbnail.png',
      githubUrl: 'https://github.com/Amekouuu/WCWEBSERVER-ADDBASE-Final-Project.git',
    },
    {
      id: 2,
      title: 'DineSmart ',
      subtitle: 'Web-based Reservation System',
      role:'Project Manager',
      roleDesc:'Led the team on app flow and UI/UX design',
      description: 'A web-based reservation platform UI/UX design for buffets and unlimited type restaurants',
      techStack: ['UI/UX', 'Figma'],
      link: 'https://www.figma.com/proto/FEIF2RApyICgdIuohSyzLr/DineSmart-Design?page-id=0%3A1&node-id=1-222&p=f&viewport=25%2C181%2C0.15&t=0zE2WED8ThXKqQGg-1&scaling=min-zoom&content-scaling=fixed',
      thumbnail: 'DineSmart-thumbnail.png',
      figmaUrl: 'https://www.figma.com/proto/FEIF2RApyICgdIuohSyzLr/DineSmart-Design?page-id=0%3A1&node-id=1-222&p=f&viewport=25%2C181%2C0.15&t=0zE2WED8ThXKqQGg-1&scaling=min-zoom&content-scaling=fixed',
    },
    {
      id: 3,
      title: 'Cush Lounge Cafe',
      subtitle: 'Client Website Implementation',
      role:'UI/UX Designer | QA Tester',
      roleDesc:'Created web page designs and checked consistent quality for all pages',
      description: 'A website design implementation for a local cafe',
      techStack: ['UI/UX', 'Figma'],
      link: 'https://www.figma.com/proto/h5FRqSWsxupk6V4WlWddMZ/Untitled?page-id=0%3A1&node-id=12-73&p=f&viewport=650%2C-422%2C0.1&t=H5qjvUIxYDZr9y4O-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2',
      featured: true,
      thumbnail: 'Cush-thumbnail.png',
      figmaUrl: 'https://www.figma.com/proto/h5FRqSWsxupk6V4WlWddMZ/Untitled?page-id=0%3A1&node-id=12-73&p=f&viewport=650%2C-422%2C0.1&t=H5qjvUIxYDZr9y4O-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2',
    },
    {
      id: 4,
      title: 'Sole Purpose',
      subtitle: 'Shoe E-commerce website',
      role:'Own Project',
      roleDesc:'First project I came up with out of passion, combining my love for shoes and web development',
      description: 'A shoe E-commerce website designed with HTML and CSS, focused on clean product presentation and UX',
      techStack: ['HTML', 'CSS'],
      link: 'https://solepurposeshop.netlify.app',
      thumbnail: 'SolePurpose-thumbnail.png',
      githubUrl:'https://github.com/Zcyde/Sole-Purpose.git',
    },
  ];

  constructor(
    private titleService: Title,
    private metaService: Meta    
  ) {}

  ngOnInit(): void {
    // ✅ SEO: Set page title and meta tags for projects page
    this.titleService.setTitle('Projects | Eldrin Josh Pineda');
    this.metaService.updateTag({ name: 'description', content: 'Browse projects by Eldrin Josh Pineda' });
    this.metaService.updateTag({ property: 'og:title', content: 'Projects | Eldrin Josh Pineda' });
    this.metaService.updateTag({ property: 'og:description', content: ' Projects by Eldrin Josh Pineda —  FilSafe Enterprises, DoMore Planner, DineSmart, Sole Purpose.' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
  }

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
}