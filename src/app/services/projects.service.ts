import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Project } from '../model/project.model';

// Esta anotação faz com que o Angular gerencie os locais em que o serviço é injetado,
// não precisando informar nem ao componente, nem ao módulo
@Injectable({ providedIn: 'root' })
export class ProjectsService {
  getProjects() {
    const projects: Project[] = [];

    projects.push({
      id: 'projeto-angular-001',
      title: 'Aplicação de filmes',
      imageUrl:
        'https://cdn.discordapp.com/attachments/931554086816448566/1140383720965161051/image.png',
      aplicationUrl: 'https://project-movies-site.web.app/',
      description:
        'Este projeto é uma aplicação desenvolvida com o FrameWork Angular com intuito de ser a página inicial de um serviço de streaming, o conteúdo está vinculado a uma API gratuita de consulta de filmes (TMDB). Possui em seu inicio uma tela de escolha de usuário, em sua tela de início existem três filmes em destaque na parte superior, outros filme em destaque com barra de rolagem e abaixo uma lista de series.',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    });

    projects.push({
      id: 'cadastro-de-produto-angular-003',
      title: 'Cadastro de produtos',
      imageUrl:
        'https://cdn.discordapp.com/attachments/931554086816448566/1140383899097239682/image.png',
      aplicationUrl: '',
      description:
        'Este projeto é uma aplicação desenvolvida com o FrameWork Angular com intuito',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    });

    return of(new HttpResponse<Project[]>({ body: projects }));
  }
}
