
export class Rant {
  $key: string;
  faculty: string;
  body: string;
  claps: number;

  constructor (body, claps, faculty) {
    this.body = body;
    this.claps = claps;
    this.faculty = faculty;
  }
}
