const { useState } = require('react');

export default function Survey() {
  const [introScreen, setIntroScreen] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question:
        'Parmi les produits suivants, lequel détenez vous ou avez détenus:',
      answers: [
        'Comptes courant ou livret d’épargne (Livret A, LDD, PEL…)',
        'Compte titres ordinaire (CTO), PEA',
        'Portefeuille de cryptomonnaies',
      ],
    },
    {
      question: 'Comment gérez-vous vos placements financiers ?',
      answers: [
        'Seul',
        'Conseillé par un non-professionnel financier',
        'Conseillé par un professionnel financier',
      ],
    },
  ];

  const surveySection = [
    'Introduction',
    'Expériences',
    'Connaissances des marchés',
    'Profil de risque',
    'Investissement durable',
    'Attentes',
  ];

  return (
    <div className='d-flex flex-column justify-content-around mt-5'>
      <div className='d-flex flex-row justify-content-around'>
        {surveySection.map((section, index) => (
          <p
            className={
              activeSection === index ? 'text-secondary' : 'text-muted'
            }>
            {section}
          </p>
        ))}
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        {introScreen ? (
          <div className='d-flex flex-column align-items-center justify-content-center w-50'>
            <h3>Questionnaire d'inscription</h3>
            <p className='text-center'>
              Avant de commencer à utiliser LeCrew, vous devez répondre à un
              court questionnaire afin de déterminer vos connaissaces des
              marchés, votre aversion au risques ainsi que vos attentes quant à
              vos partenaires de Crew
            </p>
            <btn
              className='btn btn-info'
              onClick={() => {
                setIntroScreen(false);
                setActiveSection(activeSection + 1);
              }}>
              Démarer
            </btn>
          </div>
        ) : (
          <div>
            <h4>{questions[currentQuestion].question}</h4>
            {questions[currentQuestion].answers.map((answer) => answer)}
          </div>
        )}
      </div>
    </div>
  );
}
