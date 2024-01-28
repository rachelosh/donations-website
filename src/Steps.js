import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ToDonate from './ToDonate';
import Finish from './Finish';
import CreditCardForm from './Pay';


const steps = ['פרטי תרומה', 'תשלום', 'סיום'];
const Steps = (props) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };
    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };
    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <Box sx={{ direction: 'rtl', width: '60%', paddingRight: '20%', paddingLeft: '20%', height: '70vh' }}>
            <Stepper nonLinear activeStep={activeStep} >
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" >
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1, marginRight: 'auto', marginLeft: 'auto' }}>
                            {activeStep === 0 ? (
                                <ToDonate addPeopleToList={props.addPeopleToList} />
                            ) : (
                                activeStep === 1 ? (
                                    <CreditCardForm />
                                ) : (
                                    <Finish />
                                )
                            )}

                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0 || activeStep === 2}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {activeStep !== steps.length &&
                                (completed[activeStep] ? (
                                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                        <Button onClick={handleComplete}>
                                            לשלב הבא
                                        </Button>
                                    </Typography>
                                ) : (completedSteps() !== 2 ? (
                                    <Button onClick={handleComplete}>
                                        {completedSteps() === totalSteps() - 2
                                            ? 'Finish'
                                            : 'לשלב הבא'}
                                    </Button>
                                ) : (null)
                                ))}
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );
}
export default Steps;