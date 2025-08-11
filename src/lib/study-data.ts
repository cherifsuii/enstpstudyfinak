export interface StudyMaterial {
  title: string;
  url: string;
  type: 'course' | 'exercise' | 'exam' | 'td' | 'resume' | 'book' | 'other';
  language: 'french' | 'english' | 'both';
}

export interface Subject {
  name: string;
  materials: StudyMaterial[];
}

export interface Semester {
  name: string;
  subjects: Subject[];
}

export interface Year {
  name: string;
  semesters: Semester[];
}

export interface Program {
  name: string;
  years: Year[];
}

// DIB Engineering Cycle Data
export const dibCycle: Program = {
  name: "Cycle DIB (Développement et Infrastructures de Base)",
  years: [
    {
      name: "1ère Année",
      semesters: [
        {
          name: "Semestre 1",
          subjects: [
            {
              name: "MDF",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=1hjhU5JTE1L-AYV3742jsQRZiuy5FMAv7&usp=drive_copy", type: "other", language: "french" },
                { title: "Examens corrigés Fluides réels", url: "https://drive.google.com/file/d/1PNVj3_5F8M8Of9BxJ1yKL7tpY-v-7hby/view?usp=drive_link", type: "exam", language: "french" },
                { title: "MDF Book", url: "https://drive.google.com/open?id=1mWlJgU4lu_Dc7wfQ8xOBHuteuOiG49hP&usp=drive_copy", type: "book", language: "french" },
                { title: "Solutions TD MDF", url: "https://drive.google.com/file/d/1At0Ppy1bDEtms9u4QEysQTKv8hLkOFfo/view?usp=drive_link", type: "other", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=1-URDGGAmzgYej1iTsV3C-hkejSCTNwk4&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "MDC",
              materials: [
                { title: "Pack", url: "https://drive.google.com/drive/folders/1aeP9kt2GbSM1GYwUdgUY7FVv2pCXfQVB?usp=drive_link", type: "other", language: "french" },
                { title: "Resume", url: "https://drive.google.com/open?id=10rEq_2M-HwowjoDU0cuAoemX4DTvGiHP&usp=drive_copy", type: "resume", language: "french" }
              ]
            },
            {
              name: "MDS",
              materials: [
                { title: "Pack", url: "https://drive.google.com/drive/folders/1h6i8pwBI2atdcKjcM5EZdT8LcYL8sJe4?usp=drive_link", type: "other", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=16xDDog8A5UmQ8QhbXRwQE1naz0Arm269&usp=drive_copy", type: "course", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1qwKLkSZ4zCHih1vT6-7U9IJbZwz0DMZ7&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "MMC",
              materials: [
                { title: "Les Cours", url: "https://drive.google.com/open?id=1ZS3VZaDzUJwBEDeb7hxcpr9Phd9wMOnl&usp=drive_copy", type: "course", language: "french" },
                { title: "Cahier", url: "https://drive.google.com/open?id=11S60FMkHd853ZCn_b6Y3MIJYavv6n29G&usp=drive_copy", type: "other", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1lV0eFqUxfIe8T5TTSgV5C8vD7yxzIV6j&usp=drive_copy", type: "td", language: "french" },
                { title: "Exam", url: "https://drive.google.com/open?id=16-X9xpLNpmKC5rBFkUORvxoyFuFiOZks&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "RDM",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/drive/folders/1-K1dMIhi0g6ta8suoXSEX51vZywZsPJQ?usp=drive_link", type: "other", language: "french" },
                { title: "Les Chapitres", url: "https://drive.google.com/open?id=1u1_xadIEHoxN9PKbt7rGP00YKZF-y7Qh&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "Topographie",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1UsdvcZCnSWrY7qwgdP2tVXysN_HnzCrw&usp=drive_copy", type: "course", language: "french" },
                { title: "Exams", url: "https://drive.google.com/open?id=1jEzXSPMLK7xC90_3T6JB--M7BqNsUk6h&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "Géologie",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1Oni7x9JSOF2wLCZXWPdaapD70k3wXmWV&usp=drive_copy", type: "course", language: "french" },
                { title: "Cours More Detailed", url: "https://drive.google.com/open?id=1q_Gwint6HBUIuCvWps6DTaxXKnb1ljB9&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "ANANUM",
              materials: [
                { title: "Examen", url: "https://drive.google.com/open?id=1lCBvB9GmI6mEzmrSSLv6c9rFx2434MAQ&usp=drive_copy", type: "exam", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1WEu8wXqf29XgMihFAYdcYSJVF5SyQDXT&usp=drive_copy", type: "td", language: "french" },
                { title: "Resume", url: "https://drive.google.com/open?id=1xGFsI7wRwVEjMuBBFZWXKqtZkerRuYBQ&usp=drive_copy", type: "resume", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=1-i9X2lXB0u3ryM23K-s7FKuAlzo7K5RD&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "Hydrologie Appliquée",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=1jAPHwB3CCwvhT7ZTBayIesnzhkucMWXt&usp=drive_copy", type: "other", language: "french" }
              ]
            }
          ]
        },
        {
          name: "Semestre 2",
          subjects: [
            {
              name: "ROUTE",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1ouDWbs9l-0eM0nbVIBRlMvsmXEKFHb8J&usp=drive_copy", type: "course", language: "french" },
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=10eZY0dkojDUx8kmIQ7TmkbboJtZbB4zZ&usp=drive_copy", type: "other", language: "french" },
                { title: "Exercice", url: "https://drive.google.com/open?id=1FJgbMgqkbvPqUwq7AhELCmvYDb5lhJiM&usp=drive_copy", type: "exercise", language: "french" }
              ]
            },
            {
              name: "RDM 2",
              materials: [
                { title: "Coming Soon", url: "#", type: "other", language: "french" }
              ]
            },
            {
              name: "MMC 2",
              materials: [
                { title: "Pack", url: "https://drive.google.com/open?id=1OiBgCWDrNt2tWyAAH2yIQ6ppCKzXdiSh&usp=drive_copy", type: "other", language: "french" }
              ]
            },
            {
              name: "MDS 3",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=1zuNjlqYLMcS2nqz42Jx5RuMQcPENxIDP&usp=drive_copy", type: "other", language: "french" },
                { title: "Resume", url: "https://drive.google.com/open?id=1opJc0TvBGOOS96pN-NtOM_Iqx_sK3UeG&usp=drive_copy", type: "resume", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=105uPJzZodqtU3mspqBeznrgdqcz1F87b&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "MDC 2",
              materials: [
                { title: "Coming Soon", url: "#", type: "other", language: "french" }
              ]
            },
            {
              name: "Hydraulique Appliquée",
              materials: [
                { title: "Coming Soon", url: "#", type: "other", language: "french" }
              ]
            },
            {
              name: "Structure",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=1mmEd-O17HuQi1uSv7rOTkSl0GSopbj09&usp=drive_copy", type: "other", language: "french" },
                { title: "Resume", url: "https://drive.google.com/open?id=1ppn8EL59NSSlX8KUlknfTBdHmtmqVNiv&usp=drive_copy", type: "resume", language: "french" },
                { title: "Les Cours", url: "https://drive.google.com/open?id=1BTjm9PT3x59pmgJk_tucdezU3fNGROR6&usp=drive_copy", type: "course", language: "french" }
              ]
            }
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
            {
              name: "Base Aérienne & Travaux Maritimes",
              materials: [
                { title: "Cours 1", url: "https://drive.google.com/open?id=1hHnlLoEWaUZxzzFLHmZQmVOTU9PybQzo&usp=drive_copy", type: "course", language: "french" },
                { title: "Cours 2", url: "https://drive.google.com/open?id=1Ml04JUgHCd5bb0aysfA_mThgP3jYd_RP&usp=drive_copy", type: "course", language: "french" },
                { title: "Examens", url: "https://drive.google.com/open?id=17pOY8Oa8y6yyI3uVg3iyfoLPbmafMr53&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "ROUTE",
              materials: [
                { title: "Les Cours", url: "https://drive.google.com/open?id=1oDLjIt8xeC6MrAJ65ZPlZE7ZOpcOiDwH&usp=drive_copy", type: "course", language: "french" },
                { title: "Exercice", url: "https://drive.google.com/open?id=18pswxCbAjwQJhKZCxGX8Xxj6bYCpH784&usp=drive_copy", type: "exercise", language: "french" },
                { title: "Examens Final", url: "https://drive.google.com/open?id=1IveidQx8F8nvBDeUMEJDvnYZIWZjIZOw&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "VF1 (Voie Ferrée 1)",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1DMjt2UThzp8rkm_kZFSqLcFKTxthAwDq&usp=drive_copy", type: "course", language: "french" },
                { title: "Resume", url: "https://drive.google.com/open?id=1Q043AlHeQeB8bA94vbh3L38gvv52Qs4r&usp=drive_copy", type: "resume", language: "french" },
                { title: "Examens Final", url: "https://drive.google.com/open?id=14T6Cbza5TWx9ZxWAwvdbM9mT9bcbZ7vL&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "MEF (Méthode des Éléments Finis)",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=12b_UfHzrbHlaP6vrsfBQBWlpmcVpg5oE&usp=drive_copy", type: "course", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1NkUS1HSmAtJK-qBoEy8COMZZUwoDZk6o&usp=drive_copy", type: "td", language: "french" },
                { title: "Examen", url: "https://drive.google.com/open?id=1cCZdUE94oumfZyL5_vSsNnFD5cYVfN-k&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "GTR (Géotechnique Routière)",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=1OTHBJGlHN_5xK9UDjfDiDPZ9M4GLc5_c&usp=drive_copy", type: "other", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=12KYi7q7VETEQZz9JApwuEN8nP0b2coid&usp=drive_copy", type: "course", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1GNwHauIT7JGwWJ6fD4lRqzSTv-nkpHEy&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "DDST",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=1Xd4bEP-r0ha0G3G-nt-sOVMBsY4-SCmX&usp=drive_copy", type: "other", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=1TZjl5ApfALwq05UHscc9nuSW7Us7ZXQR&usp=drive_copy", type: "course", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1em7Hc-t6ZfPjh2QwQc4Ua0ca0yZ-5ccX&usp=drive_copy", type: "td", language: "french" },
                { title: "Examen", url: "https://drive.google.com/open?id=1IkfilExXcbBB75mGFjUd9AFEUSOYeECM&usp=drive_copy", type: "exam", language: "french" }
              ]
            }
          ]
        },
        {
          name: "Semestre 2",
          subjects: [
            {
              name: "VF2 (Voie Ferrée 2)",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1jzLJKDdpll7aVFHZWe_k_sVZDGfjSTDM&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "Pont Métallique",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=11ojA7Gn6BUdW-VJgDjjyOA9aFDLpOq_x&usp=drive_copy", type: "course", language: "french" },
                { title: "Examens", url: "https://drive.google.com/open?id=1OWean7owOksNcxmKnchhr_nmkY53xqQm&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "Charpente Métallique",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=1mUe_2OUB_kyguxTfuSqVqOhWWPBj38MM&usp=drive_copy", type: "other", language: "french" }
              ]
            },
            {
              name: "Béton Armé",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=1jc0uXe6VgnfV7bM4_CmWTBFP2J8iQEu_&usp=drive_copy", type: "other", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=11uyqmm3xJr6yEa5CjfphdTSjnfwKw3J1&usp=drive_copy", type: "course", language: "french" },
                { title: "Examen", url: "https://drive.google.com/open?id=1QbfzyBESv-TX9Vz6XtdRgBkKz7y8V3lj&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "Assainissement",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=1H0YjmSEqecZVVM2mqp785wnpfPpfww55&usp=drive_copy", type: "other", language: "french" },
                { title: "Files 2024", url: "https://drive.google.com/open?id=1CgdYs_qRZvxlo6sOg0ZKTHI-hSNE4NZ5&usp=drive_copy", type: "other", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1-D_8m-DsMSLvLNwnGWjryPn9wkk_FJ9F&usp=drive_copy", type: "td", language: "french" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "3ème Année",
      semesters: [
        {
          name: "Semestre 1",
          subjects: [
            {
              name: "Coming Soon",
              materials: [
                { title: "Coming Soon", url: "#", type: "other", language: "french" }
              ]
            }
          ]
        },
        {
          name: "Semestre 2",
          subjects: [
            {
              name: "Coming Soon",
              materials: [
                { title: "Coming Soon", url: "#", type: "other", language: "french" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// DMS Engineering Cycle Data
export const dmsCycle: Program = {
  name: "Cycle DMS (Développement et Management des Systèmes)",
  years: [
    {
      name: "1ère Année",
      semesters: [
        {
          name: "Semestre 1",
          subjects: [
            {
              name: "Topologie",
              materials: [
                { title: "TP", url: "https://drive.google.com/open?id=1jTOUuljHuGlBXz_96v1qbGWbMJktuFAl&usp=drive_copy", type: "other", language: "french" },
                { title: "EXO", url: "https://drive.google.com/open?id=1a6WKhxtmWNXowDC4pIpwVuktwiVxBEsO&usp=drive_copy", type: "exercise", language: "french" },
                { title: "Exam", url: "https://drive.google.com/open?id=1A_-3uwUnftubw9L8ZdnDFONj3vaCOQUs&usp=drive_copy", type: "exam", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=1NyWU7wuH3pB8fZzSXJYDk9F5CSN1hEbs&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "RDM",
              materials: [
                { title: "Les Cours par Chapitre", url: "https://drive.google.com/open?id=145j_195_NqVx30wqPW6DAXV8qlVz05Dm&usp=drive_copy", type: "course", language: "french" },
                { title: "Examen", url: "https://drive.google.com/open?id=12cMN57rH5VdRbzHXmjud4r_D81XJ8sf8&usp=drive_copy", type: "exam", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1pc1m9WeWTSfJWRxWhWR7fqgL8hFG1wAD&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "PGC",
              materials: [
                { title: "Les Cours par Chapitre", url: "https://drive.google.com/open?id=1JADFBLnBLFJloTowsBFeDj99LMFq7DTe&usp=drive_copy", type: "course", language: "french" },
                { title: "Resume", url: "https://drive.google.com/open?id=1BcKvwJ-cDXE3_ux_fqwIe7puYaEQ3TuC&usp=drive_copy", type: "resume", language: "french" },
                { title: "Examen", url: "https://drive.google.com/open?id=1EEM1saZHmobafvck70o6hzc-9NZT-Wmc&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "MMC",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1vdYVvZNBxsl8YyfH_0N8wR-Mk3H8qnTp&usp=drive_copy", type: "course", language: "french" },
                { title: "Exam", url: "https://drive.google.com/open?id=1BPHOnPPO3Hyk1kdxJCQ99Vsxijk4iJXz&usp=drive_copy", type: "exam", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=13Ol35PMlH2eAPbNkkI3MTmRZSHBmF4lZ&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "MDS",
              materials: [
                { title: "TD", url: "https://drive.google.com/open?id=1O8JmhXn_fhFgo5w3yEqAk_v7Z746nI1t&usp=drive_copy", type: "td", language: "french" },
                { title: "Exam", url: "https://drive.google.com/open?id=1nUKKzh70cA9-g3UYH3X2QZSfkrIzVXVN&usp=drive_copy", type: "exam", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=1L6GTtU--Kx3qhQLQ7L7Cf7urmRZs38P3&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "MDF",
              materials: [
                { title: "TD", url: "https://drive.google.com/open?id=1ZMtdLm-WroDg0gv7Ihq4fXwyF8t811ox&usp=drive_copy", type: "td", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=1mr2CS_zMz2c_KqPIjmMIyxZ-ERYYeyIw&usp=drive_copy", type: "course", language: "french" },
                { title: "Exam", url: "https://drive.google.com/open?id=1tH5-eKJ39WvMxq_qgprJRj6MoJ31vKmj&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "MDC",
              materials: [
                { title: "TP", url: "https://drive.google.com/open?id=1ZWMfy1-Rv5DsHPdzUueULjwKeVhBLaN-&usp=drive_copy", type: "other", language: "french" },
                { title: "Exam", url: "https://drive.google.com/open?id=1CRnSVoajTaZdApixkeDGKpwyfYRvR1-j&usp=drive_copy", type: "exam", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=1s3mRg0nDYaG_xR4mxoTV2Q-Io-QCzZJ2&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "Géologie",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1tJhNeQeYc4ODLcyLAjkxQnHlAyNTBj8x&usp=drive_copy", type: "course", language: "french" },
                { title: "Resume", url: "https://drive.google.com/open?id=1uK0QQkJ-KWxGduhN3JB8NprHBa7Y6s79&usp=drive_copy", type: "resume", language: "french" },
                { title: "TP", url: "https://drive.google.com/open?id=18uNA0MskVZslbDCL_lP6ZZ0wbtXQgYrx&usp=drive_copy", type: "other", language: "french" }
              ]
            },
            {
              name: "ANANUM",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=1gwVUC5ixS7CM7du3tyUm7wLwhNH0CN6M&usp=drive_copy", type: "other", language: "french" }
              ]
            }
          ]
        },
        {
          name: "Semestre 2",
          subjects: [
            {
              name: "Structure",
              materials: [
                { title: "Intero", url: "https://drive.google.com/open?id=1Q12gkG7CNICX6_7mgnfkHbFIAatPfGvW&usp=drive_copy", type: "exam", language: "french" },
                { title: "Examens", url: "https://drive.google.com/open?id=1_ZcMNURoMvs1BmXNNMl5GTt1hbYR72ox&usp=drive_copy", type: "exam", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=1q7EGYCokJ7bRRFx1NZsDCl_pxqrKLu_A&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "Route",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1jPFW36G4QbXQzankoXhuAwnsGWQ3KHdy&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "RDM",
              materials: [
                { title: "TD", url: "https://drive.google.com/open?id=1eJePBXiA3ZiP-XRDLySuuSfY4Kz5J0Gs&usp=drive_copy", type: "td", language: "french" },
                { title: "Examen", url: "https://drive.google.com/open?id=10OeXblXbhGpcUvKocSmWq9Tu3WKZ_qwT&usp=drive_copy", type: "exam", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=1wBiPykuAlUSp9j90oR9Vi4py3LhLjGiM&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "MMC",
              materials: [
                { title: "TD and Examen", url: "https://drive.google.com/open?id=1Nzd9ezbZHIlipaqB9xP8hnXWUaU899LQ&usp=drive_copy", type: "other", language: "french" },
                { title: "Cours", url: "https://drive.google.com/open?id=1uJ9tX_1V8dDgur_mOJNv78dCNocRqb1B&usp=drive_copy", type: "course", language: "french" }
              ]
            },
            {
              name: "MDS3",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1Edlq-Sa-JmcsSB_b-eqGPtiaIuXY5kg2&usp=drive_copy", type: "course", language: "french" },
                { title: "Devoir Maison", url: "https://drive.google.com/open?id=1M0MZ-6FQZjwF4tvwneyt8bM1Gj6vnxaG&usp=drive_copy", type: "other", language: "french" }
              ]
            },
            {
              name: "MDS",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1NyGiiMptpksgFrzyqtR-gUFdPtvezC3p&usp=drive_copy", type: "course", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1wO8KeYBxvAWNL-rwn5ZwYvCB7YwxFcia&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "MDC2",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/open?id=10mdXwENDNgShXYRWoyrnzYp9JttIqDr4&usp=drive_copy", type: "other", language: "french" }
              ]
            },
            {
              name: "Hydraulique Appliquée",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/drive/folders/1RbRRCxiUc8EfLz9YEYtfrcSvgJ36xaWA?usp=drive_link", type: "other", language: "french" }
              ]
            },
            {
              name: "Béton Armé",
              materials: [
                { title: "Ultimate Pack", url: "https://drive.google.com/drive/folders/1XoB78Y_uIE-_qLiNRSQZLa5_p_onIiL_?usp=drive_link", type: "other", language: "french" }
              ]
            },
            {
              name: "Anglais",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1KYPZpfPjsQrJbqz3aAdUKCw-iXSseJTL&usp=drive_copy", type: "course", language: "english" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Preparatory Cycle Data (Updated with correct content)
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
                { title: "Interrogation 4", url: "https://drive.google.com/file/d/1oQZ_2NoB8QwH4Ui5qTKY6j8rngCipumT/view?usp=drive_link", type: "exam", language: "french" },
                { title: "Correction Interro 4", url: "https://drive.google.com/file/d/1dsPN3UDDSWeWKMxFgZDS--WBQG_uDlU9/view?usp=drive_link", type: "other", language: "french" },
                { title: "Interrogation 3 avec correction", url: "https://drive.google.com/file/d/12PDwJfLdO5OMwnIYQIU2GClbtL2DibUu/view?usp=drive_link", type: "exam", language: "french" },
                { title: "Chapitre 1", url: "https://drive.google.com/file/d/1dsPN3UDDSWeWKMxFgZDS--WBQG_uDlU9/view?usp=drive_link", type: "exam", language: "french" },
                { title: "Tous les chapitres en anglais", url: "https://drive.google.com/drive/folders/1k27NTpAwY1ivkashFYwoYfXPQ9WED93X?usp=drive_link", type: "course", language: "english" },
                { title: "Examens en français", url: "https://drive.google.com/file/d/1p83jbgXs7d0KNWoBMRIsbdzmNtQLrUCf/view?usp=drive_link", type: "exam", language: "french" }
              ]
            },
            {
              name: "Analyse 1",
              materials: [
                { title: "Chapitre 1", url: "https://drive.google.com/file/d/1p83jbgXs7d0KNWoBMRIsbdzmNtQLrUCf/view?usp=drive_link", type: "course", language: "french" },
                { title: "Cours en anglais", url: "https://drive.google.com/file/d/1p83jbgXs7d0KNWoBMRIsbdzmNtQLrUCf/view?usp=drive_link", type: "course", language: "english" },
                { title: "Série TD 1", url: "https://drive.google.com/open?id=1-pZg2YaS6LEfl1MQOFbfP-UFx9OoUNfq&usp=drive_copy", type: "td", language: "french" },
                { title: "Examen 1", url: "https://drive.google.com/open?id=18YG0Xo8pm-kAVPpgPfsDWZnxVVbbZ8u_&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "Physique 1",
              materials: [
                { title: "Cours 1", url: "https://drive.google.com/open?id=1gg3N6GJaMsfzmycbBWc1C_xNh9w6B9IY&usp=drive_copy", type: "course", language: "french" },
                { title: "Lexique important", url: "https://drive.google.com/open?id=1lDLOjiMm6N5lW4DGHM6IbDhUtB2A8T8E&usp=drive_copy", type: "other", language: "french" },
                { title: "Série TD 1 (anglais)", url: "https://drive.google.com/open?id=1IaLzVn6aDMpZL_Xq_X9hzVKIU8-tNdSk&usp=drive_copy", type: "td", language: "english" },
                { title: "Examen 1 (anglais)", url: "https://drive.google.com/open?id=1UZ84wd3G-I0icVI5UaEgW5XORfhZKoAp&usp=drive_copy", type: "exam", language: "english" }
              ]
            },
            {
              name: "Chimie 1",
              materials: [
                { title: "Cours 1 (anglais)", url: "https://drive.google.com/open?id=1wo68ow2R-bShpD3dOKzdoX8WE1JdYiJD&usp=drive_copy", type: "course", language: "english" },
                { title: "Cours 1 (français)", url: "https://drive.google.com/open?id=1gREiRUWzQO6xCAAPSe6MVLE8RdOfshYp&usp=drive_copy", type: "course", language: "french" },
                { title: "TD 1 (anglais)", url: "https://drive.google.com/open?id=1BxEUImbPAU3rgBrbzwQY8a6jeieD7wwF&usp=drive_copy", type: "td", language: "english" },
                { title: "TD 1 (français)", url: "https://drive.google.com/open?id=1Xm_bBC-66XTVwEUClGNUi6pRK8L7HsAb&usp=drive_copy", type: "td", language: "french" }
              ]
            }
          ]
        },
        {
          name: "Semestre 2",
          subjects: [
            {
              name: "Algèbre 2",
              materials: [
                { title: "Cours", url: "#", type: "course", language: "french" },
                { title: "TD", url: "#", type: "td", language: "french" },
                { title: "Examens", url: "#", type: "exam", language: "french" }
              ]
            },
            {
              name: "Analyse 2",
              materials: [
                { title: "Cours", url: "#", type: "course", language: "french" },
                { title: "TD", url: "#", type: "td", language: "french" },
                { title: "Examens", url: "#", type: "exam", language: "french" }
              ]
            },
            {
              name: "Physique 2",
              materials: [
                { title: "Cours", url: "#", type: "course", language: "french" },
                { title: "TD", url: "#", type: "td", language: "french" },
                { title: "Examens", url: "#", type: "exam", language: "french" }
              ]
            },
            {
              name: "Chimie 2",
              materials: [
                { title: "Cours", url: "#", type: "course", language: "french" },
                { title: "TD", url: "#", type: "td", language: "french" },
                { title: "Examens", url: "#", type: "exam", language: "french" }
              ]
            }
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
            {
              name: "Analyse 3",
              materials: [
                { title: "Cours (French)", url: "https://drive.google.com/open?id=1VTDFmbaIt9Air9ZpxLNgZoJs696xNIVW&usp=drive_copy", type: "course", language: "french" },
                { title: "Resumes", url: "https://drive.google.com/open?id=1Xq1brWQdHaEUQvk2CjhG85u9e-2aFanB&usp=drive_copy", type: "resume", language: "french" },
                { title: "Examens et Intiro", url: "https://drive.google.com/open?id=1y8sbpCmDJgeNiSxqvKPNMPH0RNs9QS-u&usp=drive_copy", type: "exam", language: "french" },
                { title: "Exam ENSTP", url: "https://drive.google.com/open?id=1obVYlhzgQ7WnhkXlQ-mC2RdVnsU9tO3m&usp=drive_copy", type: "exam", language: "french" },
                { title: "TD ENSTP", url: "https://drive.google.com/open?id=1BIuyoDlQzx71WnVvY5sfum_ppIf3JaqW&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "Physique 3",
              materials: [
                { title: "Course", url: "https://drive.google.com/open?id=16tPHgnNAwqEVHru4pr8xThvoSOjDl-0U&usp=drive_copy", type: "course", language: "french" },
                { title: "All Courses Mr Berroudji", url: "https://drive.google.com/open?id=1fQXpR-bjd2ejnSCwj7V9VH0vdokuz5J-&usp=drive_copy", type: "course", language: "french" },
                { title: "Resume", url: "https://drive.google.com/open?id=1DeTog5eQjOaKP9QmPaNlK0JJ1mJm5BgQ&usp=drive_copy", type: "resume", language: "french" },
                { title: "TD Mr Berroudji", url: "https://drive.google.com/open?id=1XvXrDarSTXPL5tQhin-iyOJ7V0BhetNy&usp=drive_copy", type: "td", language: "french" },
                { title: "Exam Mr Berroudji", url: "https://drive.google.com/open?id=1g7DdDmdLewlZQkH3gVW3_WW0dMjIKppU&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "Chimie 3",
              materials: [
                { title: "Courses", url: "https://drive.google.com/open?id=1kKJhrDMN65UV7Y8MACvQrqy02_FuBYmi&usp=drive_copy", type: "course", language: "french" },
                { title: "Exams", url: "https://drive.google.com/open?id=1hJ0DU0zYlTUoi49rKpkt2WLdo8fwptHm&usp=drive_copy", type: "exam", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1A-d1tzQnDToXWmi1l-pr49DgafwLTBSG&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "ANANUM 1",
              materials: [
                { title: "Courses", url: "https://drive.google.com/open?id=1qb9MQqTLgqKDSoWwMPBzP3EddnmYy5E-&usp=drive_copy", type: "course", language: "french" },
                { title: "Exams", url: "https://drive.google.com/open?id=1OWN4JH3G2qsdairfrK-a4_SBAnqJkyXC&usp=drive_copy", type: "exam", language: "french" },
                { title: "TD Mr Hammadi", url: "https://drive.google.com/open?id=1AjlrkSrg5l_ksmXSA1uMjimLGZaUAjbu&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "Électricité 1",
              materials: [
                { title: "TD", url: "https://drive.google.com/open?id=1J0PXbDJPUQnbP5c57W_QVuaNPhTasGKe&usp=drive_copy", type: "td", language: "french" },
                { title: "Courses", url: "https://drive.google.com/open?id=1hI8-QyNla3-BeZbTQZ37mYBqhYTgmHlH&usp=drive_copy", type: "course", language: "french" },
                { title: "Exams", url: "https://drive.google.com/open?id=19KscZFyujU6B-oMamn0toVTvPEQ6yBS1&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "Informatique 3",
              materials: [
                { title: "Courses", url: "https://drive.google.com/open?id=1P5cUlD_qaJvhVcMX5XPCIRgcMenuv401&usp=drive_copy", type: "course", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1S58vxhwH6uNCrWf4LJjd8K0pJ2PIqP4T&usp=drive_copy", type: "td", language: "french" },
                { title: "Exam", url: "https://drive.google.com/open?id=1Dj08cYdJQpo41HBlhi4BBYGs5U1TT6k9&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "Mécanique Rationnelle",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1o31PIjvaPzeJ9RPqA0kYfZjiG89Z0uAt&usp=drive_copy", type: "course", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1BM6gl1nVZ4XucgVT8OY2JTnvLsIFnua3&usp=drive_copy", type: "td", language: "french" },
                { title: "Exams", url: "https://drive.google.com/open?id=1SP_PKqiM5KIGIrNSsWWVu_nRnaSgwIay&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "Anglais",
              materials: [
                { title: "2CP Classroom", url: "https://classroom.google.com/u/9/c/NTU1NDgzNzY2NDAx", type: "other", language: "english" }
              ]
            }
          ]
        },
        {
          name: "Semestre 2",
          subjects: [
            {
              name: "Analyse 4",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1FkLk_h1OMrbSMbf5buIrCH7j4Ifcggef&usp=drive_copy", type: "course", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1dHVTEueSPDYHY8ExOwpJrY4q0Y7MfGFG&usp=drive_copy", type: "td", language: "french" },
                { title: "Exam", url: "https://drive.google.com/open?id=1g36075hCYANxvdsod-K4O-zB7pbmsSr6&usp=drive_copy", type: "exam", language: "french" }
              ]
            },
            {
              name: "ANANUM 2",
              materials: [
                { title: "Cours", url: "https://drive.google.com/open?id=1HMAEx5mqQyAHP0G6hGH0vaMxnTs3t6_A&usp=drive_copy", type: "course", language: "french" },
                { title: "Exam", url: "https://drive.google.com/open?id=1xTDmTtOvZrP6gCnMQ8zIzEPf_-esI3sb&usp=drive_copy", type: "exam", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1p8u6mcy278AkcyFVD3nTnjLh7IvwT24L&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "Physique 4",
              materials: [
                { title: "Cours Mr Berroudji", url: "https://drive.google.com/open?id=1w4GcuybMbP9kR4MLBaMawr8tlZw4mm2i&usp=drive_copy", type: "course", language: "french" },
                { title: "DS Mr Berroudji", url: "https://drive.google.com/open?id=1WV5cZiFSRgS5Un8lqLgLN9dygahMM90v&usp=drive_copy", type: "other", language: "french" },
                { title: "Exams Mr Berroudji", url: "https://drive.google.com/open?id=1VsbWBJ3OEXEUwbgTgHVBjhR6tx4xGNwF&usp=drive_copy", type: "exam", language: "french" },
                { title: "TD Mr Berroudji", url: "https://drive.google.com/open?id=1s3A70nHjEulqApAXge3jDO5-4focxxCl&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "Chimie 4",
              materials: [
                { title: "Courses", url: "https://drive.google.com/open?id=1UilMG_f0E_9SFrb-WGD8BMTp78TIlbGX&usp=drive_copy", type: "course", language: "french" },
                { title: "Exams", url: "https://drive.google.com/open?id=1yZz7sOC7NMZElJ47b2usrSZ0yC-ULB-3&usp=drive_copy", type: "exam", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1EHqm9eAyd4yXBbbtqgQdukN-CKJJqI1u&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "Informatique 4",
              materials: [
                { title: "Courses", url: "https://drive.google.com/open?id=1oc-FDLmRY-Lvq1FQLTp4T5-3mhVaIbTH&usp=drive_copy", type: "course", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1veu_MLKI5cT-4uXQszsEQKMwAzK_R4lR&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "Électronique",
              materials: [
                { title: "Courses", url: "https://drive.google.com/open?id=1lhxweJalP2PNcW4alRTd3WsiYjxIzG2K&usp=drive_copy", type: "course", language: "french" },
                { title: "Resumes", url: "https://drive.google.com/open?id=1J67jdMvxzv_stKlkN03toxxACWDdmRtM&usp=drive_copy", type: "resume", language: "french" },
                { title: "TD", url: "https://drive.google.com/open?id=1B2EPereIQvoOF4v1Pp0VcQrx9ct7SGPm&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "Résistance des Matériaux",
              materials: [
                { title: "Courses", url: "https://drive.google.com/open?id=1DMz-ceaOB6fFEo7E05aFTDLUwLpJeeyh&usp=drive_copy", type: "course", language: "french" },
                { title: "Exams", url: "https://drive.google.com/open?id=1GKnnFP37pQFqRdDh8Vwx7_WRR4_rdInF&usp=drive_copy", type: "exam", language: "french" },
                { title: "TDs", url: "https://drive.google.com/open?id=18Y5Pu3w-J7ljF-V9hkKpD7z0_S1f_frM&usp=drive_copy", type: "td", language: "french" }
              ]
            },
            {
              name: "Mécanique Rationnelle 2",
              materials: [
                { title: "Livre Kaddi", url: "https://drive.google.com/open?id=1sBwoJDR23jvoe33LEt-7cW1dIcYMQvFp&usp=drive_copy", type: "book", language: "french" },
                { title: "TD et Solutions", url: "https://drive.google.com/open?id=1hW7Oo0Fvizp4rRluOWtR-9WPuzyi9m_k&usp=drive_copy", type: "td", language: "french" },
                { title: "Courses", url: "https://drive.google.com/open?id=1xE1lMMt8raXd5uZKiO1c6oieaOC_RSBP&usp=drive_copy", type: "course", language: "french" },
                { title: "Intiro et Exams", url: "https://drive.google.com/open?id=1ekDJuWyHCj7lFaYP8hueQOYwME3M4av_&usp=drive_copy", type: "exam", language: "french" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

