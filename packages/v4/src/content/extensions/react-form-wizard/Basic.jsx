import { WizardPage, Step, Section, TextInput, Select } from '@patternfly-labs/react-form-wizard'

function Example() {
   return (
      <WizardPage title="My Wizard">
         <Step label="Details" id="details-step">
            <Section label="Details">
               {/* <TextInput label="Name" path="name" required />
               <Select label="Namespace" path="namespace" options={['default', 'namespace-1']} /> */}
               Wowzy
            </Section>
         </Step>
      </WizardPage>
   )
}

export default Example