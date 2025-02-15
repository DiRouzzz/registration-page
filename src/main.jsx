import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RegisterContainer } from './Components/customValidate/RegisterContainer.jsx';
import { RegisterContainerYup } from './Components/ReactHookFormYup/RegisterContainerYup.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RegisterContainerYup />
    {/* <RegisterContainer /> */}
	</StrictMode>
);
