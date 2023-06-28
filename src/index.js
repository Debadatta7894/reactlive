import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import { Login } from './component/login/Login';
import {DataBinding} from './component/Data-Binding/data-binding';
import {ObjectDataBinding} from './component/Data-Binding/Object-data-binding';
import {ArrayDataBinding} from './component/Data-Binding/Array-data-binding';
import {ArrayObjectDataBinding} from './component/Data-Binding/Array-ob-data-binding';
import {NestedDataBinding} from './component/Data-Binding/Nested-data-binding';
import {StateDataBinding} from './component/Data-Binding/State-data-binding';
import {TwoWayDataBinding} from './component/Data-Binding/Two-way-data-binding';
import {NasaComponent} from './component/nasa-api/nasa.component';
import {NasaComponents} from './component/nasa-api/nasa.componentone';
import {FakestoreComponent} from './component/fakestore-api/fakestore.component';
import {StyleBinding} from './component/style-css-binding/style.binding';
import {StyleBindings} from './component/style-css-binding/style.bindings';
import {ClassDemoComponent} from './component/class-Demo/class.demo';
import {ClassBindingComponent} from './component/class-Demo/class.demos';
import {EventBinding} from './component/event-binding/event.binding';
import {EventBindings} from './component/event-binding/event.binding1';
import {EventBindingA} from './component/event-binding/event.binding2';
import {MouseDemo} from './component/mouse-demo/mouse-demo';
import {MouseOverOut} from './component/mouse-demo/mouse-over-out';
import {MouseMove} from './component/mouse-demo/mouse-move';
import {TouchEvent} from './component/mouse-demo/touch-event';
import {KeyDemo} from './component/keydemo/keydemo';
import {ElementStateEvent} from './component/keydemo/element-state-events';
import {ElementState} from './component/keydemo/element-state-event1';
import {PasswordStrengthMeter} from './component/Password/password';
import {ButtonDemo} from './component/Button-demo/button.demo';
import {ClipBoard} from './component/clipboard-demo/clipboard';
import {TimerDemo} from './component/Timer-Event/timer-event';
import {TimersDemos} from './component/Timer-Event/timer-events';
import {TimeEvent} from './component/Timer-Event/timer-event1';
import {SpinnerBar} from './component/Timer-Event/spinner';
import { ProgressBar} from './component/Timer-Event/Progress';
import {HomeComponent} from './component/home-Denmo/home-component';
import {HomeComponents} from './component/home-Denmo/home-components';
import {LoginClassComponent} from './Class-component/Login-class-Component';
import {StateClassComponent} from './Class-component/State-Class-Component';
import {EventClassComponent} from './Class-component/Event-class-component';
import {EvLoginComponent} from './Class-component/Event-Login-class-component';
import {FakestoreClas} from './Class-component/fakesoreClass';
import {LifeCycleDemo} from './Class-component/LifeCycle-Demo';
import { PureDemo } from './Class-component/Pure-Demo';
import { ClassPropertiesDemo } from './Class-component/classPropertieDemo';
import { ConditionalRender } from './Class-component/ConditionalRender';
import { FormDemo } from './component/Form-Demo/form-demo';
import { FormsDemos } from './component/Form-Demo/Forms-Demos';
import { FormsValidation } from './component/Form-Demo/form-validation';
import { FormikDemo } from './component/Formik-Demo/Fomik-demo';
import { FormikValidation } from './component/Formik-Demo/Formik-Validation';
import { YupDemo } from './component/Yup-Demo/yup-demo';
import { YupDemos } from './component/Yup-Demo/Yup-demos';
import { FormikComponent } from './component/Formik-Component/formik-component';
import { TutorialComponent } from './component/Tutorial-Component/tutorial-component';
import { ShoppingIndex } from './Shopping-spa/Shopping-index';
import { FakestoreIndex } from './Fakestore-SPA/fakestore-index';
import { TutorialIndex } from './tutorial/tutorial-index';
import {CookiesProvider} from 'react-cookie'
import { MUIDemo } from './component/mui-demo/mui-demo';
import { ContexDemo } from './component/contex-demo/contex-demo';
import { ReducerDemo } from './component/Reduce-Deom/reduce-demo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
    <TutorialIndex/>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
