import React from 'react';
import { SwapStepItemExpandedProps } from './SwapSteps.type';
import { columns } from './SwapSteps.helper';

function SwapStepItemExpanded(props: SwapStepItemExpandedProps) {
  const { step, open, firstStep } = props;
  const { from, to } = step;
  const {
    symbol: fromSymbol,
    name: fromName,
    blockchain: fromBlockchain,
  } = from;
  const { symbol: toSymbol, name: toName, blockchain: toBlockchain } = to;

  return (
    <div
      className={`transition-[max-height] duration-[0.7s] ease-in-out overflow-hidden ${
        open ? 'max-h-[500px]' : 'max-h-0'
      }`}>
      <div className="pt-15 md:pt-35 text-14 md:text-22 text-primary-500">
        {`Swap from ${fromSymbol || fromName} (on ${fromBlockchain}) to ${
          toSymbol || toName
        } (on ${toBlockchain})`}
      </div>

      <div className="pt-10 md:pt-25">
        {columns.map((col, index) => {
          const StepValueComponent = col.component;
          const { title, id } = col;
          return (
            <>
              <div
                key={`column-${id}`}
                className="flex flex-col md:grid md:grid-cols-7">
                <div className="text-12 mb-5 md:mb-0 md:text-16 font-medium md:p-16 pl-0 md:col-span-3 text-primary-500 flex items-center">
                  {`${title} : `}
                </div>
                {StepValueComponent && (
                  <StepValueComponent
                    firstStep={firstStep}
                    column={col}
                    step={step}
                  />
                )}
              </div>
              {index !== columns.length - 1 && (
                <div className="h-[0.5px] my-10 md:my-0 w-full bg-neutral-300"></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SwapStepItemExpanded;