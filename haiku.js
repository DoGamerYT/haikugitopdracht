// Plak hier de haiku functions onder elkaar
const haikus = [
    () => {
        console.log("Haiku by:", "Kobayahsi Issa");
        console.log("The wren");
        console.log("Earns his living");
        console.log("Noiselessly");
    },
    () => {
        console.log("Haiku by:", "Matsuo Bashō");
        console.log("From time to time");
        console.log("The clouds give rest");
        console.log("To the moon-beholders.");
    },
    () => {
        console.log("Haiku by:", "Yosa Buson");
        console.log("Over-ripe sushi,");
        console.log("The Master");
        console.log("Is full of regret.");
    },
    () => {
        console.log("Haiku by:", "Masaoaka Shiki");
        console.log("Consider me");
        console.log("As one who loved poetry");
        console.log("And persimmons.");
    },
    () => {
        console.log("Haiku by:", "Matsuo Bashō");
        console.log("In the cicada's cry");
        console.log("No sign can foretell");
        console.log("How soon it must die.");
    },
    () => {
        console.log("Haiku by:", "Yosa Buson");
        console.log("Blowing from the west");
        console.log("Fallen leaves gather");
        console.log("In the east.");
    },
    () => {
        console.log("Haiku by:", "Kobayashi Issa");
        console.log("Winter seclusion -");
        console.log("Listening, that evening,");
        console.log("To the rain in the mountain.");
    }
];

// Laat de code hieronder met rust
haikus.forEach(haiku => haiku());