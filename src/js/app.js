import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import Team from './Team';

const mag = new Magician(1, 'Магуша');
const dem = new Daemon(1, 'Демыч');
const swor = new Swordsman(1, 'Меча');
const bow = new Bowman(1, 'Луча');
const dead = new Undead(1, 'Труп');
const vam = new Vampire(1, 'Ваня');

const myTeam = new Team;
myTeam[0] = swor;
myTeam[1] = bow;
myTeam[2] = mag;
const compTeam = new Team;
compTeam[0] = dem;
compTeam[1] = dead;
compTeam[2] = vam;

//console.log(myTeam.next());
console.log(...compTeam);
