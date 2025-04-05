
import React, { useRef } from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import ImageDisplay from '@/components/ImageDisplay';
import ReferenceList from '@/components/ReferenceList';

const Index = () => {
  // References to each section for navigation
  const introRef = useRef<HTMLDivElement>(null);
  const gameWorldRef = useRef<HTMLDivElement>(null);
  const wayfindingRef = useRef<HTMLDivElement>(null);
  const progressionRef = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);
  const referencesRef = useRef<HTMLDivElement>(null);
  
  // Sample placeholder references
  const references = [
    {
      id: "ref1",
      author: "Smith, J.",
      year: "2022",
      title: "The Evolution of Game Design",
      source: "Journal of Game Studies, 15(2), 112-128",
      url: "https://example.com/game-design"
    },
    {
      id: "ref2",
      author: "Johnson, A.",
      year: "2021",
      title: "Wayfinding Systems in Modern Games",
      source: "Game Developer Conference Proceedings",
      url: "https://example.com/wayfinding"
    },
    {
      id: "ref3",
      author: "Williams, P. & Davis, M.",
      year: "2023",
      title: "Player Progression: Psychological Foundations",
      source: "Interactive Entertainment Press"
    },
    // Add 9 more references in the same format to reach 12 total
    {
      id: "ref4",
      author: "Garcia, R.",
      year: "2020",
      title: "Open World Design Principles",
      source: "Digital Game Worlds, 8(3), 45-62"
    },
    {
      id: "ref5",
      author: "Taylor, S.",
      year: "2022",
      title: "Environment Storytelling in AAA Games",
      source: "Game Narrative Review, 5(1), 18-32"
    },
    {
      id: "ref6",
      author: "Chen, L.",
      year: "2021",
      title: "User Interface Design for Immersive Experiences",
      source: "UX in Games Conference"
    },
    {
      id: "ref7",
      author: "Thompson, K.",
      year: "2019",
      title: "Level Design: Theory and Practice",
      source: "Game Development Handbook, 3rd Ed."
    },
    {
      id: "ref8",
      author: "Brown, H. & White, G.",
      year: "2023",
      title: "Player Psychology and Game Mechanics",
      source: "Cognitive Gaming Journal, 12(4), 220-235"
    },
    {
      id: "ref9",
      author: "Lee, J.",
      year: "2022",
      title: "Reward Systems in Modern Gaming",
      source: "Interactive Design Today, 7(2), 56-70"
    },
    {
      id: "ref10",
      author: "Miller, R.",
      year: "2020",
      title: "The Art of Game Feel",
      source: "Digital Arts Press"
    },
    {
      id: "ref11",
      author: "Wilson, E.",
      year: "2021",
      title: "Narrative Integration in Game Worlds",
      source: "Storytelling in Interactive Media, 3(1), 88-102"
    },
    {
      id: "ref12",
      author: "Parker, D.",
      year: "2023",
      title: "Accessibility Features in Contemporary Games",
      source: "Inclusive Gaming Quarterly, 9(3), 145-160"
    },
  ];

  // Function to scroll to section
  const navigateToSection = (sectionId: string) => {
    const sectionMap: {[key: string]: React.RefObject<HTMLDivElement>} = {
      "introduction": introRef,
      "game-world": gameWorldRef,
      "wayfinding": wayfindingRef,
      "progression": progressionRef,
      "conclusion": conclusionRef,
      "references": referencesRef
    };
    
    const ref = sectionMap[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={navigateToSection} />
      
      <main className="flex-grow">
        <Section
          ref={introRef}
          id="introduction"
          title="Introduction"
          index={0}
        >
          <ImageDisplay
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Person using a laptop with game development software open"
            caption="Gaming experiences have evolved into complex interactive narratives"
            position="right"
            size="medium"
          />
          <p>
            Welcome to an exploration of the intricate world of game design and player experience.
            In this analysis, we dive deep into the art and science of creating engaging virtual worlds
            that captivate players through carefully crafted environments, intuitive navigation systems,
            and rewarding progression mechanics. The modern video game has transcended simple entertainment
            to become a complex interactive medium that combines narrative, visual art, music, and gameplay
            into cohesive experiences that resonate with millions worldwide.
          </p>
          <p>
            This blog examines the critical elements that make game worlds believable and immersive,
            the wayfinding systems that guide players through complex virtual landscapes, and the
            progression mechanics that maintain engagement throughout the gaming experience. By understanding
            these fundamental aspects of game design, we can better appreciate the craft behind our
            favorite gaming experiences and gain insights into what makes certain titles stand out in an
            increasingly crowded marketplace.
          </p>
        </Section>
        
        <Section
          ref={gameWorldRef}
          id="game-world"
          title="Game World"
          index={1}
        >
          <p>
            Game worlds serve as the foundation upon which all player experiences are built. These virtual
            environments must strike a delicate balance between believability and fantasy, offering players
            spaces that feel cohesive and logical while still providing opportunities for wonder and discovery.
            The most successful game worlds feel lived-in and authentic, with internal consistency in their
            rules, aesthetics, and narrative elements.
          </p>
          
          <ImageDisplay
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Vibrant game environment showing a fantastical landscape"
            caption="Modern game worlds blend realistic elements with fantastical design"
            position="left"
            size="medium"
          />
          
          <p>
            Environmental storytelling has become increasingly sophisticated in modern game design,
            with developers using level architecture, ambient audio, lighting, and carefully placed
            objects to communicate narrative without explicit exposition. Players are encouraged to
            piece together stories through exploration and observation, creating a more engaging and
            active relationship with the narrative. This approach respects player intelligence while
            rewarding curiosity and attention to detail.
          </p>
          
          <p>
            The technical aspects of world-building have evolved dramatically in recent years, with
            advancements in procedural generation allowing for vast landscapes that would be impossible
            to craft manually. However, the most compelling worlds still benefit from thoughtful human
            design that considers player psychology, emotional pacing, and meaningful interaction
            opportunities. Whether open-world or linear, the game environment must support the core
            gameplay loop while providing context and purpose to player actions.
          </p>
        </Section>
        
        <Section
          ref={wayfindingRef}
          id="wayfinding"
          title="Wayfinding"
          index={2}
        >
          <p>
            Wayfinding systems represent the collection of design elements that help players navigate
            game worlds effectively. These systems can range from explicit directional aids like maps,
            compasses, and objective markers to more subtle environmental cues like lighting, architecture,
            and color theory. The art of wayfinding lies in providing just enough guidance to prevent
            frustration while preserving the joy of discovery and exploration.
          </p>
          
          <ImageDisplay
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Game interface showing map and navigation elements"
            caption="Effective wayfinding combines UI elements with environmental design"
            position="center"
            size="large"
          />
          
          <p>
            Modern games employ numerous techniques to guide player movement and attention. Visual
            landmarks serve as orientation points and destinations, while level geometry can subtly
            funnel players toward important areas through widened paths or strategic lighting. User
            interface elements complement these environmental cues, providing contextual information
            without overwhelming the player or breaking immersion.
          </p>
          
          <p>
            The challenge for designers lies in calibrating wayfinding systems to player skill and
            game genre expectations. A survival horror game might intentionally limit navigational
            aids to increase tension and disorientation, while an open-world adventure might offer
            comprehensive mapping tools to support exploration of vast territories. Effective wayfinding
            considers both the practical need for orientation and the emotional experience the game
            aims to deliver.
          </p>
        </Section>
        
        <Section
          ref={progressionRef}
          id="progression"
          title="Progression"
          index={3}
        >
          <p>
            Progression systems are the frameworks that provide players with a sense of advancement
            and accomplishment throughout their gaming experience. These systems tap into fundamental
            psychological motivators by offering clear goals, measurable improvement, and meaningful
            rewards that expand player capabilities or provide recognition of achievement.
          </p>
          
          <ImageDisplay
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
            alt="Player engaged with a game showing level-up animation"
            caption="Progression systems provide players with meaningful advancement and rewards"
            position="right"
            size="medium"
          />
          
          <p>
            Character development through skill trees, equipment upgrades, and stat increases
            represents one of the most common progression mechanics, allowing players to customize
            their experience while gaining power. Narrative progression complements these systems
            by unfolding story elements that provide context and emotional investment to mechanical
            advancement. The most effective games intertwine these systems, making narrative
            milestones coincide with meaningful gameplay evolutions.
          </p>
          
          <p>
            The pacing of progression is critical to maintaining player engagement. Too rapid and
            the game may feel insubstantial or lacking in challenge; too slow and players may
            become frustrated or bored. Modern game design often incorporates multiple progression
            tracks operating simultaneously at different timescales, from moment-to-moment skill
            challenges to long-term character development arcs. This layered approach helps ensure
            players always have meaningful goals within reach while still working toward larger
            achievements.
          </p>
        </Section>
        
        <Section
          ref={conclusionRef}
          id="conclusion"
          title="Conclusion"
          index={4}
        >
          <p>
            The artistry of game design lies in the seamless integration of world-building,
            wayfinding, and progression systems to create experiences that captivate players
            and keep them engaged over extended periods. The most successful games achieve a
            harmonious balance between these elements, with each supporting and enhancing the others
            to deliver cohesive and memorable experiences.
          </p>
          
          <ImageDisplay
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            alt="Developer workstation showing game design in progress"
            caption="The future of game design continues to evolve through innovation and player feedback"
            position="center"
            size="medium"
          />
          
          <p>
            As technology continues to evolve, so too will the possibilities for creating more
            immersive worlds, more intuitive navigation systems, and more satisfying progression
            mechanics. Virtual reality, procedural generation, artificial intelligence, and other
            emerging technologies promise to expand the boundaries of what's possible in game design.
            However, the fundamental principles discussed in this analysis will likely remain relevant,
            as they speak to core aspects of human psychology and our relationship with interactive
            entertainment.
          </p>
          
          <p>
            Understanding these principles benefits not only game designers but also players and
            critics, providing a framework for analyzing and appreciating the craft behind successful
            games. By recognizing the intentionality behind these design elements, we can develop a
            deeper appreciation for games as a complex art form that combines technical expertise with
            creative vision to deliver experiences that resonate on multiple levels.
          </p>
        </Section>
        
        <Section
          ref={referencesRef}
          id="references"
          title="References"
          index={5}
        >
          <ReferenceList references={references} />
        </Section>
      </main>
      
      <footer className="bg-slate-800 text-white py-6">
        <div className="container text-center">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} Wordscape Wanderer Chronicles | Academic Blog Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
