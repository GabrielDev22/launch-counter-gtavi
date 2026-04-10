export class NewsItem {
  id!: number;
  category!: string;
  date!: string;
  title!: string;
  excerpt!: string;
  tag!: string;
  featured!: boolean;
  link?: string;
}