import { Injectable } from '@angular/core';
import { Skill } from '../model/skill.model';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  getSkills() {
    const skills: Skill[] = [];

    skills.push({
      id: 'Angular',
      description:
        'Conhecimento com o FrameWork Angular. Usado para o desenvolvimento de SPA (Single Page Aplications), tenho no meu portfólio um exemplo de uma aplicação de filmes (estilo Netflix), e um pequeno sistema CRUD, que é um controle de cadastro de produtos.',
      imageUrl: '/assets/angularIcon.svg',
    });

    skills.push({
      id: 'TypeScript',
      description:
        'Domínio da linguagem TypeScript. É uma linguagem de programação extensora ao JavaScript. Muito usada para grandes projetos por conta de sua tipagem, aumenta a organização e diminuí as margens de erros.',
      imageUrl: '/assets/tsIcon.svg',
    });

    skills.push({
      id: 'HTML',
      description:
        'Habilidade com HTML5, conhecimento profundo na linguagem de marcação e domínio em semântica HTML para melhor organização, responsividade e portabilidade do projeto.',
      imageUrl: '/assets/htmlIcon.svg',
    });

    skills.push({
      id: 'CSS',
      description:
        'Estilização e design com CSS. Domínio amplo da ferramenta, fazendo com que a estilização de seu site ou sistema seja adequada a necessidade do cliente. Planejamento prévio sobre a UI e UX do projeto para melhor fluidez do desenvolvimento e maior agrado dos usuários.',
      imageUrl: '/assets/cssIcon.svg',
    });

    skills.push({
      id: 'JavaScript',
      description:
        'Domínio em JavaScript. conhecimento da linguagem de programação, priorizando a programação funcional e reativa, para fácil leitura e simplicidade do código, minimizando problemas e facilitanto manutenções e melhorias futuras.',
      imageUrl: '/assets/jsIcon.svg',
    });

    return of(new HttpResponse<Skill[]>({ body: skills }));
  }
}
