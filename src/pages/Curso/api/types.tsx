export interface Curso {
  id?: number;
  nome: string;
  categoria: string;
}

export interface DadosCurso {
  dadosCurso: Curso;
}

export interface IdDadosCurso {
  idCurso: Curso;
}
