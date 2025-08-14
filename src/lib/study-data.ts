export interface StudyMaterial {
  title: string;
  url: string;
  type: 'course' | 'exercise' | 'exam' | 'td' | 'resume' | 'book' | 'other';
  language: 'french' | 'english' | 'both';
}

export interface Subject {
  name: string;
  materials: StudyMaterial[];
  type?: 'common' | 'dms' | 'dib'; // Used for the engineering cycle
}

export interface OptionGroup {
  name: string;
  subjects: Subject[];
}

export interface Semester {
  name: string;
  subjects: Subject[];
  options?: OptionGroup[]; // Used for the engineering cycle
}

export interface Year {
  name: string;
  semesters: Semester[];
}

export interface Program {
  name: string;
  years: Year[];
}

export interface Department {
  name: string;
  slug: 'dib' | 'dms';
  description: string;
  years: Year[];
}

export interface EngineeringProgram {
  name: string;
  departments: Department[];
}

// Preparatory Cycle Data
export const preparatoryCycle: Program = {
  name: "Cycle Préparatoire",
  years: [
    {
      name: "1ère Année",
      semesters: [
        {
          name: "Semestre 1",
          subjects: [
            {
              name: "Algèbre 1",
              materials: [
                { title: "Interrogation 4", url: "https://example.com/resource-1", type: "exam", language: "french" },
                { title: "Correction Interro 4", url: "https://example.com/resource-2", type: "other", language: "french" },
                { title: "Interrogation 3 avec correction", url: "https://example.com/resource-3", type: "exam", language: "french" },
                { title: "Chapitre 1", url: "https://example.com/resource-4", type: "course", language: "french" },
                { title: "Tous les chapitres en anglais", url: "https://example.com/resource-5", type: "course", language: "english" },
                { title: "Examens en français", url: "https://example.com/resource-6", type: "exam", language: "french" }
              ]
            },
            {
              name: "Analyse 1",
              materials: [
                { title: "Chapitre 1", url: "https://example.com/resource-7", type: "course", language: "french" },
                { title: "Cours en anglais", url: "https://example.com/resource-8", type: "course", language: "english" },
                { title: "Série TD 1", url: "https://example.com/resource-9", type: "td", language: "french" },
                { title: "Examen 1", url: "https://example.com/resource-10", type: "exam", language: "french" }
              ]
            },
            {
              name: "Physique 1",
              materials: [
                { title: "Cours 1", url: "https://example.com/resource-11", type: "course", language: "french" },
                { title: "Lexique important", url: "https://example.com/resource-12", type: "other", language: "french" },
                { title: "Série TD 1 (anglais)", url: "https://example.com/resource-13", type: "td", language: "english" },
                { title: "Examen 1 (anglais)", url: "https://example.com/resource-14", type: "exam", language: "english" }
              ]
            },
            {
              name: "Chimie 1",
              materials: [
                { title: "Cours 1 (anglais)", url: "https://example.com/resource-15", type: "course", language: "english" },
                { title: "Cours 1 (français)", url: "https://example.com/resource-16", type: "course", language: "french" },
                { title: "TD 1 (anglais)", url: "https://example.com/resource-17", type: "td", language: "english" },
                { title: "TD 1 (français)", url: "https://example.com/resource-18", type: "td", language: "french" }
              ]
            }
          ]
        },
        {
          name: "Semestre 2",
          subjects: [
            { name: "Algèbre 2", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Analyse 2", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Physique 2", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Chimie 2", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
          ]
        }
      ]
    },
    {
      name: "2ème Année",
      semesters: [
        {
          name: "Semestre 1",
          subjects: [
            { name: "Analyse 3", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Physique 3", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Chimie 3", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "ANANUM 1", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Électricité 1", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Informatique 3", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Mécanique Rationnelle", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
          ]
        },
        {
          name: "Semestre 2",
          subjects: [
            { name: "Analyse 4", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "ANANUM 2", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Physique 4", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Chimie 4", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Informatique 4", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Électronique", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Résistance des Matériaux", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
            { name: "Mécanique Rationnelle 2", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
          ]
        }
      ]
    }
  ]
};

// Engineering Cycle Data
export const engineeringCycle: EngineeringProgram = {
  name: "Cycle d'Ingénieur",
  departments: [
    {
      name: "DIB (Infrastructures de Base)",
      slug: "dib",
      description: "Formation d'ingénieurs spécialisés dans la conception et la réalisation des infrastructures de base : routes, ouvrages d'art, etc.",
      years: [
        {
          name: "1ère Année (S1/S2)",
          semesters: [
            {
              name: "Semestre 1",
              subjects: [
                { name: "Résistance des matériaux RDM", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Mécanique des sols MDS", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Mécanique des milieux continus MMC", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Mécanique des fluides MDF", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Matériaux de construction MDC", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Géologie", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Topographie", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Matlab", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Analyse numérique", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
              ]
            },
            {
              name: "Semestre 2",
              subjects: [
                { name: "RDM2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Structure", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MDS2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MDS3", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MMC2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Hydraulique", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MDC2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Route1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Mécanique des roches MDR", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Géologie2", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Matlab2", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
              ]
            }
          ]
        },
        {
          name: "2ème Année (S3/S4)",
          semesters: [
            {
              name: "Semestre 3",
              subjects: [
                { name: "MDS4", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Dynamique des structures DDST", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Charpente métallique CM", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MEF1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Mécanique des structures MDST", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Dessin assisté par ordinateur DAO", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Route2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "esquisse route1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "ponts1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Drainage et Assainissement urbain", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Géotechnique routière GTR", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "BA1", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
              ],
              options: [
                {
                  name: "Option S3 DIB",
                  subjects: [
                    { name: "Voies ferrées + ponts rails", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                    { name: "travaux maritimes + bases aériennes", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
                  ]
                }
              ]
            },
            {
              name: "Semestre 4",
              subjects: [
                { name: "MDS5", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "DDST2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "DDSol1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "CM2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MEF2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MDST2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Ponts2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "esq route2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "esq pont1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "BP1", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "BA2", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "GTR2", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
              ],
              options: [
                {
                  name: "Option S4 DIB",
                  subjects: [
                    { name: "Voies ferrées2 + ponts rails2", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                    { name: "travaux maritimes2 + bases aériennes2", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "3ème Année (S5/S6)",
          semesters: [
            {
              name: "Semestre 5",
              subjects: [
                { name: "DDSol2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Organisation de chantier ODC", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "calcul d'ouvrages", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "pathologie des Ouvrages d'Art", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Droit des Travaux Publics", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Développement durable et aménagement de territoire", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "esq pont2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "entrepreneuriat ou management", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Economie de transport", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Rhéologie des matériaux", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "ouvrages souterrains", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Pathologie des chaussées", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "BP2", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "PGC", type: 'dib', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
              ],
              options: [
                {
                  name: "Option S5 DIB",
                  subjects: [
                    { name: "esq ponts rails + esq voie ferrée", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                    { name: "esq TM + esq Bases aériennes", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
                  ]
                }
              ]
            },
            {
              name: "Semestre 6",
              subjects: [
                { name: "Mémoire PFE", materials: [{ title: "Stage de fin d'études (3 mois)", url: "#", type: "other", language: "french" }] }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "DMS (Routes et Ouvrages)",
      slug: "dms",
      description: "Formation d'ingénieurs spécialisés dans les routes et les ouvrages, avec un focus sur les matériaux et les structures.",
      years: [
        {
          name: "1ère Année (S1/S2)",
          semesters: [
            {
              name: "Semestre 1",
              subjects: [
                { name: "Résistance des matériaux RDM", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Mécanique des sols MDS", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Mécanique des milieux continus MMC", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Mécanique des fluides MDF", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Matériaux de construction MDC", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Géologie", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Topographie", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Matlab", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Procédés généraux de construction PGC", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
              ]
            },
            {
              name: "Semestre 2",
              subjects: [
                { name: "RDM2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Structure", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MDS2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MDS3", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MMC2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Hydraulique", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MDC2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Route1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Béton armé BA1", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Méthode des éléments finis MEF appliquée", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
              ]
            }
          ]
        },
        {
          name: "2ème Année (S3/S4)",
          semesters: [
            {
              name: "Semestre 3",
              subjects: [
                { name: "MDS4", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Dynamique des structures DDST", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Charpente métallique CM", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MEF1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Mécanique des structures MDST", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Dessin assisté par ordinateur DAO", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Route2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "esquisse route1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "ponts1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Drainage et Assainissement urbain", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Béton précontraint BP1", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "BA2", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
              ],
              options: [
                {
                  name: "Option S3 DMS",
                  subjects: [
                    { name: "Bâtiments1", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                    { name: "Tunnels1", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
                  ]
                }
              ]
            },
            {
              name: "Semestre 4",
              subjects: [
                { name: "MDS5", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "DDST2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "DDSol1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "CM2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MEF2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MDST2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Ponts2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "esq route2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "esq pont1", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "BP2", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "GTR1", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
              ],
              options: [
                {
                  name: "Option S4 DMS",
                  subjects: [
                    { name: "Batiments2", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                    { name: "Tunnels2", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "3ème Année (S5/S6)",
          semesters: [
            {
              name: "Semestre 5",
              subjects: [
                { name: "DDSol2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Organisation de chantier ODC", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "calcul d'ouvrages", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "pathologie des Ouvrages d'Art", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Droit des Travaux Publics", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Développement durable et aménagement de territoire", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "esq pont2", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "entrepreneuriat ou management", type: 'common', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "Analyse expérimentale", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "calcul économique des projets", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "optimisation en BA", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "MMC approfondie", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                { name: "matériaux innovants", type: 'dms', materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
              ],
              options: [
                {
                  name: "Option S5 DMS",
                  subjects: [
                    { name: "esq Bâtiment + thermique bâtiment", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] },
                    { name: "esq Tunnel + méthodes de réalisation des ouvrages souterrains", materials: [{ title: "Coming Soon", url: "#", type: "other", language: "french" }] }
                  ]
                }
              ]
            },
            {
              name: "Semestre 6",
              subjects: [
                { name: "Mémoire PFE", materials: [{ title: "Stage de fin d'études (3 mois)", url: "#", type: "other", language: "french" }] }
              ]
            }
          ]
        }
      ]
    }
  ]
};
