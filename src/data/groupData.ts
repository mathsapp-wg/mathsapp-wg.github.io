import { Seminar, ResearchTheme, ReferenceItem, Organizer } from '../types';

export const WORKING_GROUP_INFO = {
  name: 'MathsApp Working Group',
  subtitle: 'A Working Group in Applied Geometry and Statistics',
  institution: 'Aix-Marseille Université (AMU)',
  researchUnit: 'Institut de Mathématiques de Marseille (I2M, UMR 7373 CNRS)',
  description:
    'MathsApp Working Group is a working group that brings together researchers, postdocs, and students interested in the interaction between $\\textbf{geometry}$ and $\\textbf{statistics}$ and the applications of geometry.',
  meetingCadence: 'Bi-weekly on Saturdays at 14:00 CET',
  location: 'Online',
  lastUpdated: '2026-10-17',
};

export const ORGANIZERS: Organizer[] = [
  {
    name: 'Houssam BOUKHECHAM',
    email: 'houssam.boukhecham@univ-amu.fr',
    role: 'Working Group Organizer',
    affiliation: 'Aix-Marseille Université',
    researchInterests: [
      'Applied Differential Geometry',
      'Nonparametric Statistics on Manifolds',
      'Dynamical Systems'
    ],
  },
];

export const UPCOMING_SEMINAR: Seminar = {
  id: 'sem-TBD',
  date: 'TBD',
  dateFormatted: 'TBD',
  time: '15:00 – 17:00 WAT',
  speakerName: 'Ahmed Zeglaoui',
  speakerUrl: 'https://scholar.google.com/citations?user=dFW-qv8AAAAJ&hl=fr',
  speakerAffiliation: 'National Higher School of Autonomous Systems Technology',
  title: 'Information geometry and Hessian domains.',
  abstract:
    'TBD',
  isUpcoming: true,
  themeId: 'theme-1',
  location: 'Online',
  hybridLink: 'https://univ-amu-fr.zoom.us/j/mathsapp-seminar',
  slidesUrl: '#',
  notesUrl: '#',
  tags: ['Takens Embedding', 'Dynamical Systems', 'Delay Coordinates', 'Differential Topology', 'Attractor Reconstruction'],
  calendarData: {
    startDateTime: '20261017T120000Z',
    endDateTime: '20261017T133000Z',
  },
};

export const PAST_SEMINARS: Seminar[] = [
  {
    id: 'sem-2026-10-17',
    date: '2026-10-17',
    dateFormatted: '17-10-2026',
    time: '15:00 – 17:00 WAT',
    speakerName: 'Houssam Boukhecham',
    speakerUrl: 'https://sites.google.com/view/houssam-boukhecham',
    speakerAffiliation: 'Aix-Marseille Université',
    title: 'On Takens Embedding Theorem.',
    abstract:
      'In this talk, we present the idea of the proof of Takens embedding theorem, then we talk how it is used in practice for signal processing. Finally, we discuss how to choose the delay parameter using mutual information.',
    isUpcoming: false,
    themeId: 'theme-1',
    slidesUrl: '#slides-boukhecham-2026',
    notesUrl: '#notes-boukhecham-2026',
    tags: ['Takens Embedding', 'Mutual Information'],
  },
  {
    id: 'sem-2026-10-10',
    date: '2026-10-10',
    dateFormatted: '10-10-2026',
    time: '15:00 – 17:00 WAT',
    speakerName: 'Kouider Djerfi',
    speakerUrl: 'https://scholar.google.com/citations?user=4Togn7oAAAAJ&hl=en&oi=ao',
    speakerAffiliation: 'University of Saida Dr Moulay Tahar',
    title: 'From Euclidean Nonparametric Estimation to Density Estimation on a Riemannian Manifold: Foundations, Results, and Perspectives',
    abstract:
      'This talk examines the extension of nonparametric density estimation from Euclidean spaces to Riemannian manifolds. Three foundational approaches are presented: Hendriks\' (1990) spectral Fourier expansions, Pelletier\'s (2005) volume-corrected kernel estimator, and Kim & Park\'s (2013) tangent-space exponential map construction. Finally, recent advances are outlined covering rotation coordinates, Bernstein-type approximations, warped products, and Riemannian foliations.',
    isUpcoming: false,
    themeId: 'theme-1',
    location: 'Online',
    slidesUrl: '#slides-djerfi-2026',
    notesUrl: '#notes-djerfi-2026',
    tags: ['Riemannian Manifolds', 'Kernel Density Estimation', 'Nonparametric Statistics'],
  },
  

];

export const RESEARCH_THEMES: ResearchTheme[] = [
  {
    id: 'theme-1',
    themeNumber: 1,
    title: 'Geometry and Statistics',
    tagline: 'Statistics on Riemannian manifolds, density estimation and information geometry',
    summary:
      'TBD.',
    description:
      'TBD.',
    keyTopics: [
      'Intrinsic Nonparametric Kernel Density Estimation on Manifolds',
      'Fréchet Means and Empirical Barycenters in Hadamard Spaces',
      'Information Geometry and the Fisher-Rao Riemannian Metric',
      'TBD',
      'TBD',
    ],
    keyQuestions: [
      'TBD',
      'TBD',
      'TBD',
    ],
    formulas: [
      {
        label: 'Riemannian Kernel Density Estimator',
        tex: '\\hat{f}_n(x) = \\frac{1}{n}\\sum_{i=1}^n \\frac{1}{h^d} K\\left(\\frac{d_g(x, X_i)}{h}\\right)',
        note: 'TBD.',
      },
      
    ],
  },
  {
    id: 'theme-2',
    themeNumber: 2,
    title: 'Geometric Design',
    tagline: 'TBD',
    summary:
      'TBD',
    description:
      'TBD',
    keyTopics: [
      'TBD',
      'TBD',
      'TBD'
    ],
    keyQuestions: [
      'TBD',
    ],
    formulas: [
      {
        label: 'Discrete Gauss-Bonnet Defect Formula',
        tex: '\\sum_{v \\in V} \\left( 2\\pi - \\sum_{f \\ni v} \\theta_f(v) \\right) = 2\\pi \\chi(M)',
        note: 'TBD',
      },
      {
        label: 'Dirichlet Energy for Conformal Mapping',
        tex: 'E_D(u) = \\frac{1}{2} \\int_M |\\nabla u|^2 \\, \\mathrm{d}V_g = \\frac{1}{2} u^\\top L u',
        note: 'TBD',
      },
    ],
  },
  {
    id: 'theme-3',
    themeNumber: 3,
    title: 'Applications to Machine Learning ("AI")',
    tagline: 'TBD',
    summary:
      'TBD',
    description:
      'TBD',
    keyTopics: [
      'TBD',
      'TBD',
      'TBD',
      'TBD',
      'TBD',
    ],
    keyQuestions: [
      'TBD',
    ],
    formulas: [
      {
        label: 'Riemannian Gradient Descent Step',
        tex: 'x_{k+1} = \\operatorname{Exp}_{x_k}\\left( -\\eta \\, \\operatorname{grad} f(x_k) \\right)',
        note: 'TBD',
      },
      {
        label: 'Pullback Metric of Neural Decoder $\\phi: \\mathcal{Z} \\to \\mathcal{X}$',
        tex: 'g_z(u, v) = \\langle J_\\phi(z) u, \\, J_\\phi(z) v \\rangle_{\\mathbb{R}^D} = u^\\top \\left( J_\\phi(z)^\\top J_\\phi(z) \\right) v',
        note: 'TBD',
      },
    ],
  },
];

export const REFERENCES_LIST: ReferenceItem[] = [
//   {
//     id: 'ref-takens-1981',
//     title: 'Detecting strange attractors in turbulence',
//     authors: 'Floris Takens',
//     year: 1981,
//     venue: 'Dynamical Systems and Turbulence, Warwick 1980, Lecture Notes in Mathematics, Springer, vol. 898, pp. 366–381',
//     doiOrUrl: 'https://doi.org/10.1007/BFb0091924',
//     themeId: 'theme-1',
//     tags: ['Delay Embedding', 'Dynamical Systems', 'Differential Topology', 'Foundational'],
//     abstractSnippet:
//       'Seminal paper establishing that generic delay coordinate mappings of a single scalar measurement reconstruct the topology of the underlying multi-dimensional attractor.',
//     bibtex: `@incollection{takens1981detecting,
//   title={Detecting strange attractors in turbulence},
//   author={Takens, Floris},
//   booktitle={Dynamical Systems and Turbulence, Warwick 1980},
//   pages={366--381},
//   year={1981},
//   publisher={Springer}
// }`,
//   },
//   {
//     id: 'ref-pelletier-2005',
//     title: 'Kernel density estimation on Riemannian manifolds',
//     authors: 'Bruno Pelletier',
//     year: 2005,
//     venue: 'Journal of Multivariate Analysis, 92(1), pp. 82–104',
//     doiOrUrl: 'https://doi.org/10.1016/j.jmva.2003.09.008',
//     themeId: 'theme-1',
//     tags: ['Riemannian Geometry', 'Kernel Density Estimation', 'Nonparametric Statistics'],
//     abstractSnippet:
//       'Formulates rigorous kernel density estimation on complete Riemannian manifolds using normal coordinates and geodesic distance, establishing uniform consistency and asymptotic normality.',
//     bibtex: `@article{pelletier2005kernel,
//   title={Kernel density estimation on Riemannian manifolds},
//   author={Pelletier, Bruno},
//   journal={Journal of Multivariate Analysis},
//   volume={92},
//   number={1},
//   pages={82--104},
//   year={2005},
//   publisher={Elsevier}
// }`,
//   },
//   {
//     id: 'ref-pennec-2006',
//     title: 'Intrinsic Statistics on Riemannian Manifolds: Basic Tools for Geometric Data Processing',
//     authors: 'Xavier Pennec',
//     year: 2006,
//     venue: 'Journal of Mathematical Imaging and Vision, 25(1), pp. 127–154',
//     doiOrUrl: 'https://doi.org/10.1007/s10851-006-6879-4',
//     themeId: 'theme-1',
//     tags: ['Riemannian Manifolds', 'Fréchet Mean', 'Covariance', 'Medical Imaging'],
//     abstractSnippet:
//       'Comprehensive framework defining expectation, variance, covariance, and Gaussian distributions on Riemannian manifolds through exponential maps and geodesic distances.',
//     bibtex: `@article{pennec2006intrinsic,
//   title={Intrinsic Statistics on Riemannian Manifolds: Basic Tools for Geometric Data Processing},
//   author={Pennec, Xavier},
//   journal={Journal of Mathematical Imaging and Vision},
//   volume={25},
//   number={1},
//   pages={127--154},
//   year={2006},
//   publisher={Springer}
// }`,
//   },
  {
    id: 'ref-panaretos-2016',
    title: 'Statistics for Mathematicians: A Rigorous First Course',
    authors: 'Victor M. Panaretos',
    year: 2016,
    venue: 'Compact Textbooks in Mathematics, Birkhäuser Cham, Springer International Publishing, 177 pp.',
    doiOrUrl: 'https://doi.org/10.1007/978-3-319-28341-8',
    themeId: 'theme-1',
    tags: ['Mathematical Statistics', 'Statistical Inference', 'Point Estimation', 'Hypothesis Testing', 'Textbook'],
    abstractSnippet:
      'A rigorous yet elementary introduction to one-parameter statistical inference, tailored to mathematics students. Covers regular probability models, sampling, point estimation, hypothesis tests, and confidence intervals with a focus on mathematical coherence and precision.',
    bibtex: `@book{panaretos2016statistics,
    title={Statistics for Mathematicians: A Rigorous First Course},
    author={Panaretos, Victor M.},
    series={Compact Textbooks in Mathematics},
    year={2016},
    publisher={Birkh{\\"a}user},
    address={Cham},
    doi={10.1007/978-3-319-28341-8}
  }`,
  },
  {
    id: 'ref-amari-2016',
    title: 'Information Geometry and Its Applications',
    authors: 'Shun-ichi Amari',
    year: 2016,
    venue: 'Applied Mathematical Sciences, Vol. 194, Springer Tokyo',
    doiOrUrl: 'https://doi.org/10.1007/978-4-431-55978-8',
    themeId: 'theme-1',
    tags: ['Information Geometry', 'Fisher Metric', 'Dual Connections', 'Textbook'],
    abstractSnippet:
      'Definitive monograph on information geometry, treating probability distributions as Riemannian manifolds equipped with the Fisher metric and dual affine connections.',
    bibtex: `@book{amari2016information,
  title={Information Geometry and Its Applications},
  author={Amari, Shun-ichi},
  volume={194},
  year={2016},
  publisher={Springer}
}`,
  },
//   {
//     id: 'ref-pottmann-2007',
//     title: 'Architectural Geometry',
//     authors: 'Helmut Pottmann, Andreas Asperl, Michael Hofer, Axel Kilian',
//     year: 2007,
//     venue: 'Bentley Institute Press, Exton, PA',
//     doiOrUrl: 'https://www.geometrie.tuwien.ac.at/geom/ig/publications/archgeom/',
//     themeId: 'theme-2',
//     tags: ['Architectural Geometry', 'Discrete Differential Geometry', 'Developable Surfaces', 'CAGD'],
//     abstractSnippet:
//       'Integrates computational differential geometry with freeform architecture, addressing panel planarization, discrete curvature lines, and kinematic fabrication.',
//     bibtex: `@book{pottmann2007architectural,
//   title={Architectural Geometry},
//   author={Pottmann, Helmut and Asperl, Andreas and Hofer, Michael and Kilian, Axel},
//   year={2007},
//   publisher={Bentley Institute Press}
// }`,
//   },
//   {
//     id: 'ref-crane-2013',
//     title: 'Digital Geometry Processing with Discrete Exterior Calculus',
//     authors: 'Keenan Crane, Fernando de Goes, Mathieu Desbrun, Peter Schröder',
//     year: 2013,
//     venue: 'SIGGRAPH Courses, ACM, pp. 1–126',
//     doiOrUrl: 'https://doi.org/10.1145/2504435.2504442',
//     themeId: 'theme-2',
//     tags: ['Discrete Exterior Calculus', 'Hodge Star', 'Poisson Surface Reconstruction', 'Geodesics'],
//     abstractSnippet:
//       'Rigorous pedagogic course connecting smooth differential forms to discrete simplicial complexes, enabling vector field design and fast geodesic distance computation.',
//     bibtex: `@inproceedings{crane2013digital,
//   title={Digital geometry processing with discrete exterior calculus},
//   author={Crane, Keenan and de Goes, Fernando and Desbrun, Mathieu and Schr{\\"o}der, Peter},
//   booktitle={ACM SIGGRAPH 2013 Courses},
//   pages={1--126},
//   year={2013}
// }`,
//   },
//   {
//     id: 'ref-bronstein-2021',
//     title: 'Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges',
//     authors: 'Michael M. Bronstein, Joan Bruna, Taco Cohen, Petar Veličković',
//     year: 2021,
//     venue: 'arXiv preprint arXiv:2104.13478',
//     doiOrUrl: 'https://arxiv.org/abs/2104.13478',
//     themeId: 'theme-3',
//     tags: ['Geometric Deep Learning', 'Symmetry & Invariance', 'Graph Neural Networks', 'Manifold Convolutions'],
//     abstractSnippet:
//       'A unifying geometric blueprint for modern deep learning structured around Erlangen program symmetry principles, extending CNNs to non-Euclidean manifolds and graphs.',
//     bibtex: `@article{bronstein2021geometric,
//   title={Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges},
//   author={Bronstein, Michael M and Bruna, Joan and Cohen, Taco and Veli{\v{c}}kovi{\\\'c}, Petar},
//   journal={arXiv preprint arXiv:2104.13478},
//   year={2021}
// }`,
//   },
//   {
//     id: 'ref-absil-2009',
//     title: 'Optimization Algorithms on Matrix Manifolds',
//     authors: 'P.-A. Absil, R. Mahony, R. Sepulchre',
//     year: 2009,
//     venue: 'Princeton University Press',
//     doiOrUrl: 'https://press.princeton.edu/books/hardcover/9780691132983/optimization-algorithms-on-matrix-manifolds',
//     themeId: 'theme-3',
//     tags: ['Riemannian Optimization', 'Stiefel Manifold', 'Retractions', 'Grassmannian'],
//     abstractSnippet:
//       'Definitive reference on unconstrained and constrained optimization over Riemannian manifolds, covering retractions, vector transports, and trust-region methods.',
//     bibtex: `@book{absil2009optimization,
//   title={Optimization Algorithms on Matrix Manifolds},
//   author={Absil, Pierre-Antoine and Mahony, Robert and Sepulchre, Rodolphe},
//   year={2009},
//   publisher={Princeton University Press}
// }`,
//   },
];
