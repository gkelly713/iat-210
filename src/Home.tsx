import React, { useRef } from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import ImageDisplay from '@/components/ImageDisplay';
import ReferenceList from '@/components/ReferenceList';
const Home = () => {
  // References to each section for navigation
  const introRef = useRef<HTMLDivElement>(null);
  const gameWorldRef = useRef<HTMLDivElement>(null);
  const wayfindingRef = useRef<HTMLDivElement>(null);
  const progressionRef = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);
  const referencesRef = useRef<HTMLDivElement>(null);

  // Academic references
  const references = [{
    id: "ref1",
    author: "Althoff, T., White, R. W., & Horvitz, E.",
    year: "2016",
    title: "Influence of Pokémon Go on physical activity: study and implications",
    source: "Journal of Medical Internet Research, 18(12), e315",
    url: "https://doi.org/10.2196/jmir.6759"
  }, {
    id: "ref2",
    author: "Cortés, L. E. P., & Kessner, T. M.",
    year: "2023",
    title: "The Future of Games Scholarship: An interview with James Paul Gee",
    source: "Games and Culture, 18(7), 907–918",
    url: "https://doi.org/10.1177/15554120221149277"
  }, {
    id: "ref3",
    author: "Filimowicz, M.",
    year: "2025",
    title: "Atmosphere & Progression [Week 8 Material; Canvas Modules]",
    source: "IAT210 OL01 Introduction to Game Studies: Theory and Design"
  }, {
    id: "ref4",
    author: "Filimowicz, M.",
    year: "2025",
    title: "Mapping & Wayfinding [Week 7 Material; Canvas Modules]",
    source: "IAT210 OL01 Introduction to Game Studies: Theory and Design"
  }, {
    id: "ref5",
    author: "Filimowicz, M.",
    year: "2025",
    title: "Game Worlds, Dimensionality & Time [Week 6 Material; Canvas Modules]",
    source: "IAT210 OL01 Introduction to Game Studies: Theory and Design"
  }, {
    id: "ref6",
    author: "Giardina, A., Schimmenti, A., Starcevic, V., King, D., Blasi, M., & Billieux, J.",
    year: "2024",
    title: "Problematic gaming, social withdrawal, and Escapism: The Compensatory-Dissociative Online Gaming (C-DOG) model",
    source: "Computers in Human Behavior, 155",
    url: "https://www.sciencedirect.com/science/article/pii/S0747563224000554"
  }, {
    id: "ref7",
    author: "Ly, L.",
    year: "2016, July 24",
    title: "Wayfinding and Pokemon Go - Lawrence Ly - Medium",
    source: "Medium",
    url: "https://medium.com/@crimsonlaw/wayfinding-and-pokemon-go-ee8a7d4d7ce6"
  }, {
    id: "ref8",
    author: "open world",
    year: "2025",
    title: "In Merriam-Webster Dictionary",
    source: "https://www.merriam-webster.com/dictionary/open%20world#:~:text=noun,game%20environment%20%3A%20sandbox%20sense%202a"
  }, {
    id: "ref9",
    author: "US HealthConnect",
    year: "2025, January 8",
    title: "Open-World Video Games Found to Boost Mental Well-Being in Postgraduate students",
    source: "© 2025",
    url: "https://reachmd.com/news/open-world-video-games-found-to-boost-mental-well-being-in-postgraduate-students/2470826/"
  }, {
    id: "ref10",
    author: "Vella, K., Johnson, D., Cheng, V. W. S., Davenport, T., Mitchell, J., Klarkowski, M., & Phillips, C.",
    year: "2017",
    title: "A sense of belonging: Pokémon GO and social connectedness",
    source: "Games and Culture, 14(6), 583–603",
    url: "https://doi.org/10.1177/1555412017719973"
  }, {
    id: "ref11",
    author: "Villanueva, X.",
    year: "2024, April",
    title: "Virtual Reality's Threat to Socialization",
    source: "University of Rochester",
    url: "https://www.library.rochester.edu/about/news/virtual-realitys-threat-socialization"
  }, {
    id: "ref12",
    author: "What are Raid Battles?",
    year: "n.d.",
    title: "Pokémon GO Help Center",
    source: "https://niantic.helpshift.com/hc/en/6-pokemon-go/faq/2187-what-are-raid-battles/"
  }, {
    id: "ref13",
    author: "Wheeler, T.",
    year: "2024, February 28",
    title: "Mental benefits of walking",
    source: "WebMD",
    url: "https://www.webmd.com/fitness-exercise/mental-benefits-of-walking"
  }];

  // Function to scroll to section
  const navigateToSection = (sectionId: string) => {
    const sectionMap: {
      [key: string]: React.RefObject<HTMLDivElement>;
    } = {
      "introduction": introRef,
      "game-world": gameWorldRef,
      "wayfinding": wayfindingRef,
      "progression": progressionRef,
      "conclusion": conclusionRef,
      "references": referencesRef
    };
    const ref = sectionMap[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen flex flex-col">
      <Header onNavigate={navigateToSection} />
      
      <main className="flex-grow">
        <Section ref={introRef} id="introduction" title="Introduction" index={0}>
          <ImageDisplay src="/lovable-uploads/f73023b3-a174-4714-9169-96adaba5b55e.png" alt="Pokémon Go screenshot showing a Fennekin in a grassy area with a Poké Ball" position="right" size="medium" />
          
          <p className="mb-4">In recent years, AR technologies have experienced remarkable growth and adoption, particularly within the mobile gaming sector. By overlaying digital content onto the physical world, AR has transformed how people interact with their surroundings through technology. This technological advancement has not only revolutionized entertainment but has also revealed promising applications for mental health and well-being. Among the most successful implementations of AR in gaming, Pokémon Go (2016) stands as a groundbreaking example that has captured worldwide attention since its 2016 launch. While celebrated for its nostalgic appeal, researchers and health professionals have recognized its potential benefits beyond mere entertainment.Pokémon Go uses AR to promote mental health through key game design elements—such as game worlds, wayfinding, and progression—demonstrating how AR can better serve as a tool for improving well-being compared to VR. While VRs are becoming increasingly popular, they are equipment heavy, fairly stationary, and can not simulate the social connectivity that ARs are capable of. AR offers valuable insights into creating digital experiences that enhance rather than detract from mental health and well-being.</p>

          <p className="mb-4">A recognized its potential benefits beyond mere entertainment.</p>

          <p><strong>Pokémon Go uses AR to promote mental health through key game design elements—such as game worlds, wayfinding, and progression—demonstrating how AR can better serve as a tool for improving well-being compared to VR.</strong> While VRs are becoming increasingly popular, they are equipment heavy, fairly stationary, and can not simulate the social connectivity that ARs are capable of. AR offers valuable insights into creating digital experiences that enhance rather than detract from mental health and well-being.</p>
        </Section>
        
        <Section ref={gameWorldRef} id="game-world" title="Game World" index={1}>
          <ImageDisplay src="/lovable-uploads/e535afda-52d3-46fc-be7e-cab65f3df5d9.png" alt="Pokémon Go map view showing a player with nearby Pokémon and PokéStops" position="left" size="medium" />
          
          <p className="mb-4">Game world is a term used to define a virtual environment where a game occurs (Filimowicz, 2025). What distinguishes Pokémon Go from standard video games is the fact that its game world is a reflection of our physical world. Immediately after launching the application, Pokémon Go asks for the player's location which is critical since the game world is literally based on real Earth geography derived from Google Maps. The game integrates game elements into the real-world map. When examining the in-game map, players observe a proportional and to-scale representation of their surroundings, similar to having a standard map application open, but enhanced with game elements. This blend of real experiences and technologies is one that is suggested by researcher James Gee, to promote health, socializing, and collaboration (Cortés & Kessner, 2023).</p>
          
          <p className="mb-4">From a technical perspective, Pokémon Go uses a 2.5 dimensional approach in their game world, similar to other AR games. The base map interface runs in the 2D mode and gives an aerial view of the player's location. But when players encounter a Pokémon, the view shifts to 3D which allows a greater blending of the real world and computer generated creatures captured by the camera in the player's device.</p>
          
          <p className="mb-4">In addition to the geographical foundation, Pokémon GO contains specific elements of open world game designs found in sandbox games such as Minecraft. According to Merriam-Webster Dictionary, Open-World games are "video game(s) or part of a video game in which the player is not constrained to achieving specific goals and has a large degree of freedom to explore, interact with, or modify the game environment" ("Open World," 2025). After completing a brief mandatory tutorial, players gain significant autonomy in choosing which objectives to pursue, which Pokémon to collect, and which gyms to challenge.</p>
          
          <p className="mb-4">
            Research has demonstrated the psychological benefits of such game environments. Studies suggest that "these immersive gaming experiences can promote cognitive escapism and mental well-being" (US HealthConnect, 2025). This discovery highlights how engaging with alternative realities can provide meaningful psychological relief from daily stresses. However, the relationship between escapism and mental health is nuanced. Further research indicates that intense disassociation through escapism and neglecting one's psychological needs can "prompt unbearable negative feelings, extreme emotion dysregulation, and the perception of the physical world as dangerous and predatory" (Giardina et al., 2024). This observation highlights the potential health risks of excessive detachment from reality that VR may encourage.
          </p>

          <p>
            What makes Pokémon Go particularly effective for mental well-being is how it navigates this balance. The game offers the psychological benefits of escapism - engaging with fantastical creatures and adventures—while simultaneously anchoring the experience in physical reality. By allowing players to explore real-world locations, Pokémon Go creates a unique hybrid experience that supports mental health without facilitating harmful detachment from reality.
          </p>
        </Section>
        
        <Section ref={wayfindingRef} id="wayfinding" title="Wayfinding" index={2}>
          <p className="mb-4">
            Wayfinding is the "process by which players navigate and orient themselves within the game environment" (Filimowicz, 2025). In Pokémon Go, this concept takes on unique significance because it offers a digital gaming experience that requires physical movement in the real world.
          </p>
          
          <ImageDisplay src="/lovable-uploads/7e213cce-e745-49d5-b384-b657a5f10a27.png" alt="Pokémon Go PokéStop at Langley City Sign landmark showing location-based gameplay" position="right" size="medium" />
          
          <p className="mb-4">
            Unlike traditional video games, where navigation occurs through input or keyboard commands, wayfinding in Pokémon GO manifests through real physical movement. Since Pokémon are spread all over the game world, players must physically travel to different places to gather these digital creatures. This fundamental design choice merges digital exploration with physical activity, creating a distinct gaming experience that encourages movement outside the boundaries of specific sedentary games (i.e., your living room when using VR).
          </p>
          
          <p className="mb-4">
            An important design element that Pokémon Go uses in its wayfinding system is the strategic placement of PokéStops in culturally significant places. These PokéStops provide players with useful in-game goods and resources; however, they are deliberately located at "landmarks such as, public buildings, statues, art pieces, and even memorial benches" (Ly, 2016). This design decision serves multiple purposes - it rewards exploration while simultaneously highlighting cultural and historical sites that players might otherwise overlook in their daily routines. Players are able to discover local landmarks they had previously passed by without notice, effectively transforming ordinary neighborhood walks into journeys of exploration and thus incentivizing walking and movement.
          </p>
          
          <p className="mb-4">
            To further encourage exploration, Pokémon uses a "cooldown" mechanism for PokéStops and Pokémon encounters. When a player interacts with these game elements, they must wait for them to respawn before they interact with them again. This mechanic prevents players from exploiting the same PokéStop or Pokémon again and again, and instead further incentivizes the continuous movement and exploration of different areas. The game has been able to create an ongoing pursuit of everyday landmarks and transform these spaces into places that foster discovery and reward.
          </p>
          
          <p className="mb-4">
            Research supports the effectiveness of this approach in promoting physical activity. Studies have found that "Pokémon Go leads to a significant increase in physical activity over a period of 30 days, with particularly engaged users" (Althoff et al., 2016). Furthermore, "easy access of mobile games such as Pokémon Go means that it has the potential to reach activity-poor populations unlike some VR games which require extensive equipment and set up" (Althoff et al., 2016). This accessibility makes Pokémon Go particularly valuable as a tool to increase physical activity among populations that may not regularly exercise.
          </p>
          
          <p>
            The mental health benefits of this walking-based gameplay are significant. The most common benefits of walking include "stress relief, improved mood, reduced tiredness and improved heart health" (Wheeler, 2024). By incentivizing regular walking through their gameplay mechanics, Pokémon Go effectively creates opportunities for mental and physical health benefits while simultaneously providing entertainment. The wayfinding system serves as more than just a navigation tool - it facilitates player wellbeing through purposeful physical movement.
          </p>
        </Section>
        
        <Section ref={progressionRef} id="progression" title="Progression" index={3}>
          <p className="mb-4">
            Progression refers to the sense of advancement and achievement players experience as they move through the content of a game. Pokémon Go offers a unique approach to progress by allowing players to advance in many ways. The most prominent progression element is environmental progression, "when a game's plot involves exploration in a way that's both interesting and pleasurable" (Filimowicz, 2025). Environmental progression is identified as walking X amount of kilometres, collecting X amount of Pokémon, using X amount of power ups etc. However, the aspect of progression that has significant influence on wellbeing is the actions available to players - those actions being raid battles.
          </p>
          
          <ImageDisplay src="/lovable-uploads/a474cded-f259-4591-996a-313296b7605d.png" alt="Pokémon Go raid battle with Tapu Lele at Iris Mooney Park showing the gym battle interface" position="left" size="medium" />
          
          <p className="mb-4">
            Unlike individual achievement systems in traditional games, raid battles are designed as collaborative challenges that encourage community engagement. In Raid battles, "opponent[s are] more difficult to defeat than most other Pokémon. The higher the difficulty, the stronger the Raid Boss and the more players you'll need in order to succeed" (What Are Raid Battles? — Pokémon GO Help Center, n.d.). This design element transforms progress from an individual experience into a social one, where advancement depends on collaboration and cooperation with one's local community. The mechanics of raid battles deliberately facilitate social interaction face-to-face. Players can participate by earning raid passes through regular gameplay and then responding to notifications about nearby raid battles. When notified, players have options: They can physically travel to the place to join the match or they can accept remote invitations from other players. While the remote option provides flexibility, the game provides additional bonuses for in-person participation, subtly encouraging face-to-face engagement when possible.
          </p>
          
          <p className="mb-4">
            This emphasis on physical meetups distinguishes Pokémon Go from VR games and creates significant mental health benefits. Research has consistently shown that "technological devices and services available cannot replace the mental health and well-being benefits of in-person communication" (Villanueva, 2024). Despite advances in VR technology, studies indicate that although sometimes indistinguishable from real life, VR interactions are still unable to simulate real life interactions due to the complexity of human emotions and communications. (Villanueva, 2024).
          </p>
          
          <p>
            Pokémon Go has been able to successfully produce a sense of belonging, facilitate conversation and strengthen social ties due to its AR nature, setting it aside from virtual sources of communication. (Vella et al., 2017). Thus the PGO progression process serves a dual purpose: it provides in-game advancement while simultaneously fostering real-world social connections that support mental wellbeing.
            By using progression mechanisms that are rooted in socializing and encouraging physical gathering, Pokémon Go bridges digital achievement with real-world connection. The game's progression system doesn't merely track individual accomplishments but builds social bonds - an essential component of mental health that purely digital environments such as VR struggle to provide.
          </p>
        </Section>
        
        <Section ref={conclusionRef} id="conclusion" title="Conclusion" index={4}>
          <ImageDisplay src="/lovable-uploads/86968564-2e59-4c2b-bf8f-d4beb94711fe.png" alt="Pokémon Go quest screen showing progression tasks and rewards" position="center" size="medium" />
          
          <p>
            Pokémon Go demonstrates how AR can enhance mental health and well-being by blending digital experiences with physical reality. Through its innovative game world design, movement-based wayfinding, and socially-oriented progression system, it provides a great contrast to VR's potential for harmful detachment. By encouraging experiences, physical activity and face-to-face social interaction, Pokémon Go creates a hybrid experience that offers the psychological benefits of escapism while maintaining connection to the real world. This balanced approach offers valuable insights for those seeking to create digital experiences that support rather than detract from mental wellbeing in our increasingly technology-driven society.
          </p>
        </Section>
        
        <Section ref={referencesRef} id="references" title="References" index={5} isReferences={true}>
          <ReferenceList references={references} />
        </Section>
      </main>
      
      <footer className="bg-slate-800 text-white py-6">
        <div className="container text-center">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} Beyond Entertainment: How Pokémon Go's AR Design Promotes Mental Well-being in the Digital Age
          </p>
        </div>
      </footer>
    </div>;
};
export default Home;