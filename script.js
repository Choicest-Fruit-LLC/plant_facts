const plantFacts = [
  "Banana plants are actually herbs, not trees!",
  "Bamboo is the fastest-growing plant in the world.",
  "Some plants can 'hear' insects chewing and respond defensively.",
  "Plants convert carbon dioxide into oxygen through photosynthesis.",
  "The corpse flower smells like rotting flesh to attract pollinators.",
  "A sunflower is made up of thousands of tiny flowers called florets.",
  "Some plants can move! The Mimosa pudica closes its leaves when touched.",
  "There are more than 390,000 known plant species on Earth.",
  "Cactus spines are actually modified leaves.",
  "Vanilla comes from the orchid family!",
  "The world's oldest known living tree is over 4,800 years old.",
    "The Amazon rainforest produces more than 20% of the world's oxygen.",
    "Plants can communicate with each other through root systems and chemical signals.",

    "The giant sequoia is the largest tree species by volume.",
    "Some plants can survive extreme conditions, like the Arctic poppy in freezing temperatures.",

    "The Venus flytrap is a carnivorous plant that catches insects for nutrients.",
    "The world's smallest flowering plant is the Wolffia, also known as watermeal.",
    "Orchids are one of the largest families of flowering plants, with over 25,000 species.",
    "The rubber tree is the source of natural rubber, used in many products.",  
    "Plants can sense gravity and grow roots downward while stems grow upward.",
    "The baobab tree can store up to 32,000 gallons of water in its trunk.",
    "Some plants, like the dandelion, can reproduce without pollination through apomixis.",
    "The lotus flower can survive in muddy water and blooms beautifully above the surface."
    
];

function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * plantFacts.length);
  const factBox = document.getElementById("fact-box");
  factBox.textContent = plantFacts[randomIndex];
}
