const techQuestions = [
    {
        question: "Quelle entreprise est connue pour son système d'exploitation mobile iOS ?",
        answer: [
            "A) Google", 
            "B) Microsoft",
            "C) Apple",
            "D) Samsung"],
        correctAnswer: "C) Apple",
    },
    {
        question: "Qu'est-ce que VR signifie dans le contexte des technologies ?",
        answer: [
            "A) Vision Réelle",
            "B) Réalité Virtuelle ", 
            "C) Vitesse Rapide" ,
            "D) Valeur Régulière"], 
        correctAnswer: "B) Réalité Virtuelle ",
    },
    {
        question: "Quel est le principal langage de programmation utilisé pour le développement web front-end ?",
        answer: [
            "A) Python",
            "B) Java",
            "C) JavaScript", 
            "D) C++"], 
        correctAnswer: "C) JavaScript"
    },
    {
        question: "Quelle technologie permet aux utilisateurs de naviguer sur Internet de manière anonyme en masquant leur adresse IP ?",
        answer: [
            "A) VPN (Réseau Privé Virtuel)", 
            "B) FTP (Protocole de Transfert de Fichiers)", 
            "C) URL (Localisateur de Ressource Universelle)",
            "D) SSL (Couche de Sockets Sécurisée)"], 
        correctAnswer: "A) VPN (Réseau Privé Virtuel)"
    },
    {
        
        question: "Quel type de technologie utilise des algorithmes complexes pour simuler des processus cognitifs humains, tels que la perception, le raisonnement et l'apprentissage ?",
        answer: [
            "A) Réalité Virtuelle", 
            "B) Intelligence Artificielle (IA)", 
            "C) Réalité Augmentée", 
            "D) Réseaux de Neurones Artificiels"], 
        correctAnswer: "B) Intelligence Artificielle (IA)"
    },
    {
       
        question: "Quel est le terme utilisé pour décrire un système de sécurité biométrique qui utilise les empreintes digitales pour vérifier l'identité d'un individu ?",
        answer: [
            "A) RFID",
            "B) NFC", 
            "C) VPN", 
            "D) Touch ID"], 
        correctAnswer: "D) Touch ID"

    },
    { 
        
        question: "Quel entrepreneur et ingénieur est à la tête de SpaceX, Tesla, et The Boring Company, et est souvent impliqué dans des projets révolutionnaires tels que les véhicules électriques et la colonisation de Mars ?",
        answer: [
            "A) Jeff Bezos", 
            "B) Elon Musk", 
            "C) Tim Cook", 
            "D) Sundar Pichai"], 
        correctAnswer: "B) Elon Musk"

    },
    {
        
        question: "Si un ordinateur a des problèmes de sommeil, que devrait-il faire ?",
        answer: [
            "A) Prendre des pilules d'alt+tab", 
            "B) Faire une sieste dans le cloud", 
            "C) Réinitialiser son horloge interne", 
            "D) la réponse D"], 
        correctAnswer: "D) la réponse D"

    },
    {
        
        question: "Quel système de stockage de données utilise des serveurs distants accessibles via Internet au lieu de recourir à des disques durs locaux ?",
        answer: [
            "A) Stockage en nuage (Cloud Storage)", 
            "B) Stockage sur disque dur", 
            "C) Stockage sur clé USB", 
            "D) Stockage sur CD-ROM"], 
        correctAnswer: "A) Stockage en nuage (Cloud Storage)"

    },
    {
    
        question: "Quel entrepreneur est à la tête de la société Amazon et est également connu pour son rôle dans l'exploration spatiale avec sa société Blue Origin ?",
        answer: [
            "A) Elon Musk", 
            "B) Bill Gates", 
            "C) Jeff Bezos", 
            "D) Mark Zuckerberg"], 
        correctAnswer: "C) Jeff Bezos"
    }
];

const historyQuestions = [
    {
        
        question: "Quelle est la ville où Jeanne d'Arc a mené sa première bataille victorieuse, levant ainsi le siège qui durait depuis plusieurs mois ?",
        answer: [
            "A) Rouen",
            "B) Orléans",
            "C) Paris",
            "D) Reims"], 
        correctAnswer: "B) Orléans"
    },
    {
        
        question: "Quelle partie du corps de Louis XIV a été affectée par une fistule, une maladie douloureuse qui lui a causé des problèmes de santé pendant une grande partie de sa vie ?",
        answer: [
            "A) Le pied ", 
            "B) L'estomac", 
            "C) L'oreille ", 
            "D) L'anus"], 
        correctAnswer: "D) L'anus"
    },
    {
        
        question: "Quel roi est mort des suites d'une blessure lors d'un combat de joute ?",
        answer: [
            "A) Henri IV ", 
            "B) François Ier", 
            "C) Henri II ", 
            "D) Louis XIV"], 
        correctAnswer: "C) Henri II "
    },
    {
        
        question: "Qui est considéré comme le premier roi des Francs ?",
        answer: [
            "A) Charlemagne", 
            "B) Clovis ", 
            "C) Pépin le Bref ", 
            "D) Charles Martel"], 
        correctAnswer: "B) Clovis "
    },
    {
        
        question: " Dans la comptine française, qui est célèbre pour 'sa culotte en travers' ?",
        answer: [
            "A) Le roi Dagobert", 
            "B) Le roi Louis", 
            "C) Le roi Charles ", 
            "D) Le roi Philippe"], 
        correctAnswer: "A) Le roi Dagobert"
    },
    {
        
        question: "Quel roi français a transformé le Château de Fontainebleau en un lieu de résidence prestigieux, connu pour son style Renaissance et son parc magnifique ?",
        answer: [
            "A) Louis XIV", 
            "B) François Ier ", 
            "C) Napoléon Bonaparte ", 
            "D) Henri IV"], 
        correctAnswer: "B) François Ier"

    },
    {
        
        question: "Dans une célèbre énigme historique, quelle couleur est attribuée au cheval blanc d'Henri IV ?",
        answer: [
            "A) Rouge", 
            "B) Noir", 
            "C) Blanc", 
            "D) Gris"], 
        correctAnswer: "C) Blanc"

    },
    {
       
        question: "Qui était président de la France pendant la Première Guerre mondiale, de 1913 à 1920, dirigeant le pays à travers cette période tumultueuse ?",
        answer: [
            "A) Georges Clemenceau ", 
            "B) Raymond Poincaré ", 
            "C) Alexandre Millerand ", 
            "D) Paul Deschanel"], 
        correctAnswer: "B) Raymond Poincaré "

    },
    {
        
        question: "Qui, avant le règne de Henri II, a réellement fait connaître Bordeaux dans l'histoire de France ?",
        answer: [
            "A) Charles VII", 
            "B) Aliénor d'Aquitaine", 
            "C) Louis IX (Saint Louis)", 
            "D) Philippe IV le Bel"], 
        correctAnswer: "B) Aliénor d'Aquitaine"

    },
    {
        
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    }
];

const cultureQuestions = [
    {
        
        question: "Quel est le prénom du jeune garçon, personnage principal de la série animée «Pokémon»?",
        answer: [
            "A) Pierrick ", 
            "B) Pikachu ", 
            "C) Sacha ", 
            "D) James"], 
        correctAnswer: "C) Sacha "
    },
    {
       
        question: "Qui est l'auteur de la série de livres à succès «Harry Potter» ?",
        answer: [
            "A) Woody Allen  ", 
            "B) J.K Rowling", 
            "C) Agatha Christie", 
            "D) Margaret Atwood"], 
        correctAnswer: "B) J.K Rowling"
    },
    {
        
        question: "Quel est le nom de l'album de M.Jackson, qui contient notamment le titre «Thriller» et «Billie Jean»?",
        answer: [
            "A) Off the Wall  ", 
            "B) Just Michael", 
            "C) Thriller ", 
            "D) Dangerous"], 
        correctAnswer: "C) Thriller"
    },
    {
        
        question: "Quel est le nom associé au personnage joué par Millie Bobby Brown dans «Stranger Things»?",
        answer: [
            "A) Quarante-deux ", 
            "B) Quatre-vingt-onze ", 
            "C) Seize ", 
            "D) Onze"], 
        correctAnswer: "D) Onze"
    },
    {
        
        question: "Quel Studio développe depuis 1991 les jeux de l'univers de «Sonic The Hedgehog»?",
        answer: [
            "A) Sega", 
            "B) Nintendo ", 
            "C) Blizzard", 
            "D) Riot Games"], 
        correctAnswer: "A) Sega"
    },
    {
        
        question: "Quel duo d'artiste francophone  à reprit en 2023 le célèbre morceau «Lady (Hear me Tonight)» sorti en 2000?",
        answer: [
            "A) Aya Nakamura & Tiakola", 
            "B) Damso & Stromae", 
            "C) Hamza & Damso ", 
            "D) Aucune des 3 réponses"], 
        correctAnswer: "C) Hamza & Damso "
    },
    {
        
        question: "Dans «Les Simpsons», comment s'appelle le voisin détesté d'Homer?",
        answer: [
            "A) Nelson Flandres ", 
            "B) Kevin-Yoann Elea", 
            "C) Ned Flanders", 
            "D) Waylon Smitters"], 
        correctAnswer: "C) Ned Flanders"
    },
    {
        
        question: "Quel réalisateur est derrière le film d'animation «Le Roi Lion» sorti en 1994 ?",
        answer: [
            "A) Steven Spielberg ", 
            "B) Hayao Miyazaki", 
            "C) John Lasseter ", 
            "D) Rob Minkoff "], 
        correctAnswer: "D) Rob Minkoff "
    },
    {
        
        question: "Quel personnage fait BIEN parti de la franchise Marvel?",
        answer: [
            "A) Le Tribunal Vivant ", 
            "B) Solar man", 
            "C) La guêpe", 
            "D) A,B et C donc D"], 
        correctAnswer: "D) A,B et C donc D"
    },
    {
        
        question: "Quel chanteuse américaine interprète «Man Down», et raconte les remords suite à un meurtre?",
        answer: [
            "A) Shakira ", 
            "B) Beyoncé ", 
            "C) Rihanna ", 
            "D) Shanna Kress"], 
        correctAnswer: "C) Rihanna "
    }
];

const sportQuestions = [
    {
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    },
    {
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    },
    {
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    },
    {
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    },
    {
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    },
    {
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    },
    {
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    },
    {
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    },
    {
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    },
    {
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    }
];