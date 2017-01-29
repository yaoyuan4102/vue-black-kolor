/**
 * Created by Yuan on 1/26/17.
 */

import Welcome from './components/Welcome.vue';
import * as Paints from './components/paints/index';

var router = [
    { path: '/', name: 'Welcome', component: Welcome },
    { path: '/paints', name: 'Paints', component: Paints.Paints }
];

export default router;