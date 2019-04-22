import Starter from '../views/starter/starter.jsx';
// ui components
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';
// Componentes
import Search from '../views/ui-components/search'
import GeneralStory from '../views/ui-components/GeneralStory'
import EndodonticsStory from '../views/ui-components/EndodonticsStory'
import Profile from '../views/ui-components/Profile'
import InfConsent from '../views/ui-components/infConsent'

let ThemeRoutes = [
  {
    path: '/buscar',
    name: 'Buscar Historias',
    icon: 'mdi mdi-pencil-circle',
    component: Search
  },
  {
    path: '/crear-historia-general',
    name: 'Crear Historia General',
    icon: 'mdi mdi-arrange-send-backward',
    component: GeneralStory
  },
  {
    path: '/crear-historia-endodoncia',
    name: 'Crear Historia Endodoncia',
    icon: 'mdi mdi-priority-high',
    component: EndodonticsStory
  },
  {
    path: '/crear-consentimiento-endodoncia',
    name: 'Crear Consentimiento',
    icon: 'mdi mdi-comment-processing-outline',
    component: InfConsent
  },
  {
    path: '/ajustes-de-perfil',
    name: 'Ajustes de Perfil',
    icon: 'mdi mdi-image-filter-vintage',
    component: Profile
  },
  // Componentes de ayuda, no borrar hasta que no se necesiten más!
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Starter 
  },
  {
    path: '/alert',
    name: 'Alerts',
    icon: 'mdi mdi-comment-processing-outline',
    component: Alerts
  },
  {
    path: '/badge',
    name: 'Badges',
    icon: 'mdi mdi-arrange-send-backward',
    component: Badges
  },
  {
    path: '/button',
    name: 'Buttons',
    icon: 'mdi mdi-toggle-switch',
    component: Buttons
  },
  {
    path: '/card',
    name: 'Cards',
    icon: 'mdi mdi-credit-card-multiple',
    component: Cards
  },
  {
    path: '/grid',
    name: 'Grid',
    icon: 'mdi mdi-apps',
    component: LayoutComponent
  },
  {
    path: '/pagination',
    name: 'Pagination',
    icon: 'mdi mdi-priority-high',
    component: PaginationComponent
  },
  {
    path: '/popover',
    name: 'Popover',
    icon: 'mdi mdi-pencil-circle',
    component: PopoverComponent
  },
  {
    path: '/ui-components/tooltip',
    name: 'Toltips',
    icon: 'mdi mdi-image-filter-vintage',
    component: TooltipComponent
  },
  { path: '/', pathTo: '/buscar', name: 'Buscar Historias', redirect: true }
];
export default ThemeRoutes;
