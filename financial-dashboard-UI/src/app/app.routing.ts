// Provides router to rest of application
// Enables feature to render specific components based on URL specified
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { QueryInterfaceComponent} from './query-interface/query-interface.component';


// Master list of all available routes
// Declared as "const" to mitigate risk of
// other portions of applcation, altering the array(master list)
const appRoutes: Routes = [ 
	
	{
		path: '',
		component: WelcomeComponent
	},
	
	{
    	path: 'about',
    	component: AboutComponent
  	},

  	{
    	path: 'query-interface',
    	component: QueryInterfaceComponent
  	}

];

// Makes list of routes available to rest of application, via the root module
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);