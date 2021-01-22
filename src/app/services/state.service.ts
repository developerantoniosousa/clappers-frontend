import { Injectable } from '@angular/core';
import { User } from '../models/app.model';

@Injectable()
export class StateService {
  data = {
    user: null,
    categories: [
      {type: "disseminate-knowledge", description: "Disseminar o conhecimento" },
      {type: "think-out-the-box", description: "Pensar fora da caixa" },
      {type: "communication", description: "Comunicação" },
      {type: "team-work", description: "Trabalho em Equipe" },
      {type: "resilience", description: "Resiliência" },
      {type: "proactivity", description: "Proatividade" },
      {type: "assertiveness", description: "Assertividade" },
      {type: "productivity", description: "Produtividade" },
      {type: "commitment", description: "Comprometimento" },
    ]
  };
}