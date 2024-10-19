const corsOptions = {
    origin: [
      "http://localhost:5173",     // Local development
    "http://localhost:4173",     // Local development
    "https://chatus-gd9f.vercel.app",  // Vercel production
    "https://chatus-gd9f-git-master-vijayiitps-projects.vercel.app",
      process.env.CLIENT_URL
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  };
  
  const CHATTU_TOKEN = "chattu-token";
  
  export { corsOptions, CHATTU_TOKEN };
