import to from './logos/21.png'
import three from './logos/365.png'
import eee from './logos/888.png'
import ava from  './logos/ava.png'
import bc from  './logos/bc.png'
import betano from  './logos/betano.png'
import betfair from  './logos/betfait.png'
import bf from  './logos/bf.png'
import bhard from  './logos/bhard.png'
import boo from  './logos/boo.png'
import bson from  './logos/bson.png'
import buff from  './logos/buff.png'
import bway from  './logos/bway.png'
import bwin from  './logos/bwin.png'
import casumo from  './logos/casumo.png'
import cor from  './logos/cor.png'
import cplay from  './logos/cplay.png'
import dund from  './logos/dund.png'
import eg from  './logos/eg.png'
import ex from  './logos/ex.png'
import gate from  './logos/gate.png'
import jojo from  './logos/jojo.png'
import kar from  './logos/kar.png'
import lb from  './logos/lb.png'
import ld from  './logos/ld.png'
import leo from  './logos/leo.png'
import man from  './logos/man.png'
import mp from  './logos/mp.png'
import mred from  './logos/mred.png'
import npar from  './logos/npar.png'
import nvpn from  './logos/nvpn.png'
import pand from  './logos/pand.png'
import pcas from  './logos/pcas.png'
import pinn from  './logos/pinn.png'
import plcas from  './logos/plcas.png'
import red from  './logos/red.png'
import sbet from  './logos/sbet.png'
import sint from  './logos/sint.png'
import sky from  './logos/sky.png'
import sn from  './logos/sn.png'
import whill from  './logos/whill.png'
import zee from  './logos/zee.png'

const mobstepone = {
    first: [bson, sbet, three, mp, sint],
    second: [zee, bway, kar, plcas, sn]
},
steptwo = {
    first: [betfair, betano, bf, leo, ex, bwin],
    second: [jojo, pand, nvpn, pcas, ava]
},
stepthree = {
    first: [bhard, man, sky, lb, casumo, buff],
    second: [cplay, red, whill, cor, ld]
},
stepfour = {
    first: [gate, pinn, eg, mred, boo],
    second: [dund, to, npar, bc]
},
stepone = {
    first: [bson, zee, sbet, bway, three, kar],
    second: [mp, plcas, sint, sn, eee]
},
mobsteptwo = {
    first: [betfair, betano, bf, leo, ex],
    second: [bwin, jojo, pand, nvpn, pcas]
},
mobstepthree = {
    first: [bhard, man, sky, lb, casumo],
    second: [red, whill, cor, ld, ava]
},
mobstepfour = {
    first: [gate, pinn, eg, mred, boo],
    second: [dund, to, npar, bc, buff]
}

export const items = [stepone, steptwo, stepthree, stepfour]
export const mobitems = [mobstepone, mobsteptwo, mobstepthree, mobstepfour]