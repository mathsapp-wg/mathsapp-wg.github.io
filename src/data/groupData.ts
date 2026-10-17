import { Seminar, ResearchTheme, ReferenceItem, Organizer } from '../types';

export const WORKING_GROUP_INFO = {
  name: 'MathsApp Working Group',
  subtitle: 'A Working Group in Applied Geometry and Statistics',
  institution: 'Aix-Marseille Université (AMU)',
  researchUnit: 'Institut de Mathématiques de Marseille (I2M, UMR 7373 CNRS)',
  description:
    'MathsApp Working Group is a working group that brings together researchers, postdocs, and students interested in the interaction between $\\textbf{geometry}$ and $\\textbf{statistics}$ and the applications of geometry.',
  meetingCadence: 'Bi-weekly on Saturdays at 14:00 CET',
  location: 'Salle de Séminaires, Campus de Luminy / Saint-Charles, Marseille (Hybrid on Zoom)',
  lastUpdated: '2026-10-13',
};

export const ORGANIZERS: Organizer[] = [
  {
    name: 'Houssam BOUKHECHAM',
    email: 'houssam.boukhecham@univ-amu.fr',
    role: 'Working Group Organizer & Researcher',
    affiliation: 'Aix-Marseille Université',
    researchInterests: [
      'Applied Differential Geometry',
      'Nonparametric Statistics on Manifolds',
      'Dynamical Systems & Takens Embedding',
      'Geometric Machine Learning',
    ],
  },
];

export const UPCOMING_SEMINAR: Seminar = {
  id: 'sem-2026-10-17',
  date: '2026-10-17',
  dateFormatted: '17-10-2026',
  time: '14:00 – 15:30 CET',
  speakerName: 'Houssam BOUKHECHAM',
  speakerUrl: 'mailto:houssam.boukhecham@univ-amu.fr',
  speakerAffiliation: 'Aix-Marseille Université (I2M)',
  title: 'On Takens embedding theorem',
  abstract:
    'The Takens delay embedding theorem (1981) constitutes a fundamental bridge between differential topology and empirical time series analysis. Given an autonomous smooth dynamical system on a compact $d$-dimensional manifold $M$ driven by a flow $\\Phi_t$ and a generic scalar observation function $h: M \\to \\mathbb{R}$, Takens proved that the delay coordinate map $\\mathbf{F}_{h,\\tau}: x \\mapsto (h(x), h(\\Phi_{-\\tau}(x)), \\dots, h(\\Phi_{-2d\\tau}(x)))^\\top$ is a smooth embedding of $M$ into $\\mathbb{R}^{2d+1}$. In this seminar, we unpack the geometric machinery behind the theorem, its reliance on Whitney embedding theorems and transversality, and its practical implications for state-space reconstruction from observational data, noise tolerance, and modern applications in geometric deep learning.',
  isUpcoming: true,
  themeId: 'theme-1',
  location: 'Salle de Séminaire 3, Campus Luminy (AMU) & Zoom Hybrid',
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
    id: 'sem-2026-10-10',
    date: '2026-10-10',
    dateFormatted: '10-10-2026',
    time: '14:00 – 15:30 CET',
    speakerName: 'Kouider Djerfi',
    speakerUrl: 'https://scholar.google.com/citations?user=4Togn7oAAAAJ&hl=en&oi=ao',
    speakerAffiliation: 'Laboratoire de Statistique et Géométrie Appliquée',
    title: 'From Euclidean Nonparametric Estimation to Density Estimation on a Riemannian Manifold: Foundations, Results, and Perspectives',
    abstract:
      'In this talk, we study the transition from classical Euclidean Parzen-Rosenblatt kernel density estimation to non-Euclidean frameworks where observations lie on a complete Riemannian manifold $(M, g)$. Due to non-zero curvature and topological invariants, standard Euclidean Euclidean translations and linear averages are ill-defined. We detail intrinsic kernel estimators of the form $\\hat{f}_n(x) = \\frac{1}{n b^d} \\sum_{i=1}^n K\\left(\\frac{d_g(x, X_i)}{b}\\right) \\frac{1}{\\theta_x(X_i)}$, where $d_g$ represents Riemannian geodesic distance and $\\theta_x(y) = \\sqrt{\\det(g_{ij}(y))}$ corrects for volume distortion in normal coordinates. We discuss uniform convergence rates, boundary behaviors, and applications in directional statistics and biomedical morphometry.',
    isUpcoming: false,
    themeId: 'theme-1',
    location: 'Salle de Séminaire 3 & Online',
    slidesUrl: '#slides-djerfi-2026',
    notesUrl: '#notes-djerfi-2026',
    tags: ['Riemannian Manifolds', 'Kernel Density Estimation', 'Nonparametric Statistics', 'Geodesic Distance'],
  },
  {
    id: 'sem-2026-09-26',
    date: '2026-09-26',
    dateFormatted: '26-09-2026',
    time: '14:00 – 15:30 CET',
    speakerName: 'Dr. Elena V. Rostova',
    speakerUrl: 'https://scholar.google.com',
    speakerAffiliation: 'CNRS & Institut Denis Poisson',
    title: 'Fréchet Means and Geodesic Regression on the Cone of Symmetric Positive Definite (SPD) Matrices',
    abstract:
      'The space $\\mathrm{Sym}^+(d)$ of symmetric positive definite (SPD) matrices arises ubiquitously in diffusion tensor imaging (DTI), covariance tracking, and brain-computer interfaces. Equipping $\\mathrm{Sym}^+(d)$ with the affine-invariant Riemannian metric $g_P(X, Y) = \\operatorname{tr}(P^{-1} X P^{-1} Y)$ yields a non-positively curved Cartan-Hadamard space where Fréchet means exist and are unique. We present efficient second-order Riemannian optimization algorithms for Fréchet averaging and geodesic longitudinal regression, demonstrating variance bounds and numerical stability.',
    isUpcoming: false,
    themeId: 'theme-1',
    location: 'Amphithéâtre Turing & Zoom',
    slidesUrl: '#slides-rostova',
    tags: ['SPD Manifolds', 'Fréchet Mean', 'Affine-Invariant Metric', 'Optimization on Manifolds'],
  },
  {
    id: 'sem-2026-09-12',
    date: '2026-09-12',
    dateFormatted: '12-09-2026',
    time: '14:00 – 15:30 CET',
    speakerName: 'Prof. Marc-Antoine Moreau',
    speakerUrl: 'https://scholar.google.com',
    speakerAffiliation: 'École Polytechnique Fédérale & INRIA',
    title: 'Discrete Differential Geometry for Curvature-Constrained Geometric Design',
    abstract:
      'Computer-aided design (CAD) of complex double-curved architectural envelopes necessitates discrete analogs of smooth differential geometry. We focus on discrete asymptotic and conjugate nets, Chebyshev nets, and developable quad meshes. By discretizing Gauss curvature $K$ and mean curvature $H$ via geometric conservation laws, we formulate continuous optimization pipelines that preserve panel fabrication constraints without visual distortion.',
    isUpcoming: false,
    themeId: 'theme-2',
    location: 'Salle de Séminaire 3 & Zoom',
    slidesUrl: '#slides-moreau',
    tags: ['Geometric Design', 'Discrete Differential Geometry', 'Architectural Geometry', 'Mesh Processing'],
  },
  {
    id: 'sem-2026-08-29',
    date: '2026-08-29',
    dateFormatted: '29-08-2026',
    time: '14:00 – 15:30 CET',
    speakerName: 'Dr. Clara Benali',
    speakerUrl: 'https://scholar.google.com',
    speakerAffiliation: 'Université Paris-Saclay & DeepMind Paris',
    title: 'Riemannian Latent Manifolds: Curvature and Invariance in Geometric Deep Learning',
    abstract:
      'Deep generative models often map high-dimensional image or biological datasets into Euclidean latent vectors $\\mathbb{R}^k$. However, the intrinsic geometry of data manifolds (e.g. molecular conformations, robotic kinematics) possesses non-trivial curvature and topology. We explore Riemannian neural flows and pull-back metrics $g(z) = J_\\phi(z)^\\top J_\\phi(z)$, showing how geodesic interpolation prevents out-of-distribution hallucinations and respects underlying Lie group symmetries.',
    isUpcoming: false,
    themeId: 'theme-3',
    location: 'Salle de Séminaire 3 & Zoom',
    slidesUrl: '#slides-benali',
    tags: ['Geometric Deep Learning', 'Latent Space Curvature', 'Lie Groups', 'Generative Models'],
  },
];

export const RESEARCH_THEMES: ResearchTheme[] = [
  {
    id: 'theme-1',
    themeNumber: 1,
    title: 'Geometry and Statistics',
    tagline: 'Statistical inference, density estimation, and information geometry on Riemannian manifolds',
    summary:
      'Investigating non-Euclidean probability models, nonparametric density estimation on manifolds, Fréchet means, and Fisher-Rao geometry.',
    description:
      'Modern scientific data routinely live on curved spaces rather than flat Euclidean domains $\\mathbb{R}^d$: spherical directions $\\mathbb{S}^2$, projective spaces, Lie groups $\\mathrm{SO}(3)$, and cones of positive definite matrices. Theme 1 develops intrinsic mathematical tools to define probability densities, conduct hypothesis tests, and compute barycenters without distorting metric invariants.',
    keyTopics: [
      'Intrinsic Nonparametric Kernel Density Estimation on Manifolds',
      'Fréchet Means and Empirical Barycenters in Hadamard Spaces',
      'Information Geometry and the Fisher-Rao Riemannian Metric',
      'Directional Statistics and Diffusion Processes on Curved Domains',
      'Takens Embedding and Delay-Coordinate Topological Reconstruction',
    ],
    keyQuestions: [
      'How does Ricci curvature affect optimal kernel bandwidth convergence?',
      'Can non-asymptotic concentration bounds be proven for Fréchet variance on compact Riemannian manifolds?',
      'What are the statistical efficiency limits of parameter estimation on matrix Lie groups?',
    ],
    formulas: [
      {
        label: 'Riemannian Kernel Density Estimator',
        tex: '\\hat{f}_n(x) = \\frac{1}{n b^d} \\sum_{i=1}^n K\\left(\\frac{d_g(x, X_i)}{b}\\right) \\frac{1}{\\theta_x(X_i)}',
        note: 'Where $d_g(x, X_i)$ is geodesic distance and $\\theta_x$ accounts for metric volume expansion.',
      },
      {
        label: 'Fréchet Mean on Metric Space $(M, d)$',
        tex: '\\mu = \\underset{p \\in M}{\\operatorname{arg\\,min}} \\; \\mathbb{E}\\left[ d^2(p, X) \\right]',
        note: 'Unique existence guaranteed when Alexandrov curvature is bounded from above.',
      },
      {
        label: 'Takens Delay Coordinate Map',
        tex: '\\mathbf{F}_{h,\\tau}(x) = \\begin{pmatrix} h(x) & h(\\Phi_{-\\tau}(x)) & \\dots & h(\\Phi_{-2d\\tau}(x)) \\end{pmatrix}^\\top \\in \\mathbb{R}^{2d+1}',
        note: 'Proves generic diffeomorphic embedding of $d$-dimensional dynamical attractor.',
      },
    ],
  },
  {
    id: 'theme-2',
    themeNumber: 2,
    title: 'Geometric Design',
    tagline: 'Computational geometry, discrete differential invariants, and surface synthesis',
    summary:
      'Formulating rigorous discrete counterparts to classical differential geometry for CAD, computer vision, architectural geometry, and mesh synthesis.',
    description:
      'Geometric design examines the translation of continuous geometric theorems into discrete, computationally realizable algorithms. Our research centers on discrete exterior calculus, developable and minimal surfaces, parameterization of manifold meshes, and spline spaces on topological surfaces.',
    keyTopics: [
      'Discrete Differential Geometry (DDG) & Exterior Calculus',
      'Curvature-Preserving Surface Meshing and Remeshing',
      'Computer-Aided Geometric Design (CAGD) & Non-Uniform B-Splines',
      'Developable and Ruled Surfaces for Structural Fabrication',
      'Geodesic Pathfinding and Distance Transforms on Polyhedral Surfaces',
    ],
    keyQuestions: [
      'Which discrete definitions of Gaussian curvature best preserve the Gauss-Bonnet theorem under perturbation?',
      'How can we guarantee developability in multi-sheet sheet metal forming without singular creasing?',
      'What variational principles yield conformal parameterizations with minimal area distortion?',
    ],
    formulas: [
      {
        label: 'Discrete Gauss-Bonnet Defect Formula',
        tex: '\\sum_{v \\in V} \\left( 2\\pi - \\sum_{f \\ni v} \\theta_f(v) \\right) = 2\\pi \\chi(M)',
        note: 'Discrete angle defect sum precisely reproduces Euler characteristic $\\chi(M)$.',
      },
      {
        label: 'Dirichlet Energy for Conformal Mapping',
        tex: 'E_D(u) = \\frac{1}{2} \\int_M |\\nabla u|^2 \\, \\mathrm{d}V_g = \\frac{1}{2} u^\\top L u',
        note: 'Discretized with the cotangent Laplace-Beltrami matrix $L$.',
      },
    ],
  },
  {
    id: 'theme-3',
    themeNumber: 3,
    title: 'Applications to Machine Learning ("AI")',
    tagline: 'Geometric deep learning, manifold learning, and topology in latent representations',
    summary:
      'Bridging differential geometry with modern deep learning: group-equivariant networks, Riemannian gradient descent, and topological data analysis.',
    description:
      'Traditional deep learning relies heavily on Euclidean vector spaces, ignoring geometric symmetries and non-linear data manifolds. Theme 3 studies neural architectures defined directly on Riemannian manifolds, graph neural networks structured through gauge equivariance, and topological invariants (persistent homology) for robust representation learning.',
    keyTopics: [
      'Geometric Deep Learning & Equivariant Neural Architectures',
      'Riemannian Optimization (Stiefel, Grassmann, SPD Manifolds)',
      'Manifold Learning & Non-Linear Dimensionality Reduction (UMAP, Isomap)',
      'Topological Data Analysis (Persistent Homology & Betti Numbers)',
      'Geodesic Latent Spaces for Deep Generative Models',
    ],
    keyQuestions: [
      'How does non-zero sectional curvature in latent spaces affect generalization and adversarial robustness?',
      'Can gauge-equivariant convolutions achieve global invariance on arbitrary compact 2-manifolds?',
      'How can persistent topological features be embedded differentiably into loss functions?',
    ],
    formulas: [
      {
        label: 'Riemannian Gradient Descent Step',
        tex: 'x_{k+1} = \\operatorname{Exp}_{x_k}\\left( -\\eta \\, \\operatorname{grad} f(x_k) \\right)',
        note: 'Updates parameter vector along geodesic generated by Riemannian gradient $\\operatorname{grad} f$.',
      },
      {
        label: 'Pullback Metric of Neural Decoder $\\phi: \\mathcal{Z} \\to \\mathcal{X}$',
        tex: 'g_z(u, v) = \\langle J_\\phi(z) u, \\, J_\\phi(z) v \\rangle_{\\mathbb{R}^D} = u^\\top \\left( J_\\phi(z)^\\top J_\\phi(z) \\right) v',
        note: 'Quantifies true intrinsic distance between latent representations.',
      },
    ],
  },
];

export const REFERENCES_LIST: ReferenceItem[] = [
  {
    id: 'ref-takens-1981',
    title: 'Detecting strange attractors in turbulence',
    authors: 'Floris Takens',
    year: 1981,
    venue: 'Dynamical Systems and Turbulence, Warwick 1980, Lecture Notes in Mathematics, Springer, vol. 898, pp. 366–381',
    doiOrUrl: 'https://doi.org/10.1007/BFb0091924',
    themeId: 'theme-1',
    tags: ['Delay Embedding', 'Dynamical Systems', 'Differential Topology', 'Foundational'],
    abstractSnippet:
      'Seminal paper establishing that generic delay coordinate mappings of a single scalar measurement reconstruct the topology of the underlying multi-dimensional attractor.',
    bibtex: `@incollection{takens1981detecting,
  title={Detecting strange attractors in turbulence},
  author={Takens, Floris},
  booktitle={Dynamical Systems and Turbulence, Warwick 1980},
  pages={366--381},
  year={1981},
  publisher={Springer}
}`,
  },
  {
    id: 'ref-pelletier-2005',
    title: 'Kernel density estimation on Riemannian manifolds',
    authors: 'Bruno Pelletier',
    year: 2005,
    venue: 'Journal of Multivariate Analysis, 92(1), pp. 82–104',
    doiOrUrl: 'https://doi.org/10.1016/j.jmva.2003.09.008',
    themeId: 'theme-1',
    tags: ['Riemannian Geometry', 'Kernel Density Estimation', 'Nonparametric Statistics'],
    abstractSnippet:
      'Formulates rigorous kernel density estimation on complete Riemannian manifolds using normal coordinates and geodesic distance, establishing uniform consistency and asymptotic normality.',
    bibtex: `@article{pelletier2005kernel,
  title={Kernel density estimation on Riemannian manifolds},
  author={Pelletier, Bruno},
  journal={Journal of Multivariate Analysis},
  volume={92},
  number={1},
  pages={82--104},
  year={2005},
  publisher={Elsevier}
}`,
  },
  {
    id: 'ref-pennec-2006',
    title: 'Intrinsic Statistics on Riemannian Manifolds: Basic Tools for Geometric Data Processing',
    authors: 'Xavier Pennec',
    year: 2006,
    venue: 'Journal of Mathematical Imaging and Vision, 25(1), pp. 127–154',
    doiOrUrl: 'https://doi.org/10.1007/s10851-006-6879-4',
    themeId: 'theme-1',
    tags: ['Riemannian Manifolds', 'Fréchet Mean', 'Covariance', 'Medical Imaging'],
    abstractSnippet:
      'Comprehensive framework defining expectation, variance, covariance, and Gaussian distributions on Riemannian manifolds through exponential maps and geodesic distances.',
    bibtex: `@article{pennec2006intrinsic,
  title={Intrinsic Statistics on Riemannian Manifolds: Basic Tools for Geometric Data Processing},
  author={Pennec, Xavier},
  journal={Journal of Mathematical Imaging and Vision},
  volume={25},
  number={1},
  pages={127--154},
  year={2006},
  publisher={Springer}
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
  {
    id: 'ref-pottmann-2007',
    title: 'Architectural Geometry',
    authors: 'Helmut Pottmann, Andreas Asperl, Michael Hofer, Axel Kilian',
    year: 2007,
    venue: 'Bentley Institute Press, Exton, PA',
    doiOrUrl: 'https://www.geometrie.tuwien.ac.at/geom/ig/publications/archgeom/',
    themeId: 'theme-2',
    tags: ['Architectural Geometry', 'Discrete Differential Geometry', 'Developable Surfaces', 'CAGD'],
    abstractSnippet:
      'Integrates computational differential geometry with freeform architecture, addressing panel planarization, discrete curvature lines, and kinematic fabrication.',
    bibtex: `@book{pottmann2007architectural,
  title={Architectural Geometry},
  author={Pottmann, Helmut and Asperl, Andreas and Hofer, Michael and Kilian, Axel},
  year={2007},
  publisher={Bentley Institute Press}
}`,
  },
  {
    id: 'ref-crane-2013',
    title: 'Digital Geometry Processing with Discrete Exterior Calculus',
    authors: 'Keenan Crane, Fernando de Goes, Mathieu Desbrun, Peter Schröder',
    year: 2013,
    venue: 'SIGGRAPH Courses, ACM, pp. 1–126',
    doiOrUrl: 'https://doi.org/10.1145/2504435.2504442',
    themeId: 'theme-2',
    tags: ['Discrete Exterior Calculus', 'Hodge Star', 'Poisson Surface Reconstruction', 'Geodesics'],
    abstractSnippet:
      'Rigorous pedagogic course connecting smooth differential forms to discrete simplicial complexes, enabling vector field design and fast geodesic distance computation.',
    bibtex: `@inproceedings{crane2013digital,
  title={Digital geometry processing with discrete exterior calculus},
  author={Crane, Keenan and de Goes, Fernando and Desbrun, Mathieu and Schr{\\"o}der, Peter},
  booktitle={ACM SIGGRAPH 2013 Courses},
  pages={1--126},
  year={2013}
}`,
  },
  {
    id: 'ref-bronstein-2021',
    title: 'Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges',
    authors: 'Michael M. Bronstein, Joan Bruna, Taco Cohen, Petar Veličković',
    year: 2021,
    venue: 'arXiv preprint arXiv:2104.13478',
    doiOrUrl: 'https://arxiv.org/abs/2104.13478',
    themeId: 'theme-3',
    tags: ['Geometric Deep Learning', 'Symmetry & Invariance', 'Graph Neural Networks', 'Manifold Convolutions'],
    abstractSnippet:
      'A unifying geometric blueprint for modern deep learning structured around Erlangen program symmetry principles, extending CNNs to non-Euclidean manifolds and graphs.',
    bibtex: `@article{bronstein2021geometric,
  title={Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges},
  author={Bronstein, Michael M and Bruna, Joan and Cohen, Taco and Veli{\v{c}}kovi{\\\'c}, Petar},
  journal={arXiv preprint arXiv:2104.13478},
  year={2021}
}`,
  },
  {
    id: 'ref-absil-2009',
    title: 'Optimization Algorithms on Matrix Manifolds',
    authors: 'P.-A. Absil, R. Mahony, R. Sepulchre',
    year: 2009,
    venue: 'Princeton University Press',
    doiOrUrl: 'https://press.princeton.edu/books/hardcover/9780691132983/optimization-algorithms-on-matrix-manifolds',
    themeId: 'theme-3',
    tags: ['Riemannian Optimization', 'Stiefel Manifold', 'Retractions', 'Grassmannian'],
    abstractSnippet:
      'Definitive reference on unconstrained and constrained optimization over Riemannian manifolds, covering retractions, vector transports, and trust-region methods.',
    bibtex: `@book{absil2009optimization,
  title={Optimization Algorithms on Matrix Manifolds},
  author={Absil, Pierre-Antoine and Mahony, Robert and Sepulchre, Rodolphe},
  year={2009},
  publisher={Princeton University Press}
}`,
  },
];
