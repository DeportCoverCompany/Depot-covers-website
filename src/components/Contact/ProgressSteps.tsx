import { Check } from "lucide-react";
import { FORM_STEPS } from "./constants";
import { cn } from "@/lib/utils";

interface ProgressStepsProps {
  currentStep: number;
}

export default function ProgressSteps({ currentStep }: ProgressStepsProps) {
  return (
    <div className="mb-10">
      {/* Desktop */}

      <div className="hidden md:flex items-start justify-between">
        {FORM_STEPS.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div
              key={step.id}
              className={cn(
                "flex flex-1 items-start",
                index === FORM_STEPS.length - 1 && "flex-none",
              )}
            >
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full border-2 flex items-center justify-center font-semibold transition-all duration-300",
                    isCompleted && "bg-accent border-accent text-white",
                    isActive && "border-accent bg-accent/10 text-accent",
                    !isCompleted &&
                      !isActive &&
                      "border-border bg-muted text-muted-foreground",
                  )}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : step.id}
                </div>

                <div className="mt-3 text-center">
                  <h4
                    className={cn(
                      "text-sm font-semibold",
                      isActive ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {step.title}
                  </h4>

                  <p className="text-xs text-muted-foreground mt-1 max-w-[120px]">
                    {step.description}
                  </p>
                </div>
              </div>

              {index !== FORM_STEPS.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-[2px] mt-6 mx-6 transition-all duration-300",
                    currentStep > step.id ? "bg-accent" : "bg-border",
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile */}

      <div className="md:hidden">
        <div className="flex justify-between mb-3">
          <span className="text-sm font-semibold text-primary">
            Step {currentStep} of {FORM_STEPS.length}
          </span>

          <span className="text-sm text-muted-foreground">
            {FORM_STEPS[currentStep - 1]?.title}
          </span>
        </div>

        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-500"
            style={{
              width: `${(currentStep / FORM_STEPS.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
