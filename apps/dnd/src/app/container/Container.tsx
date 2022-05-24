import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContainerProps {}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  section {
    height: 100vh;

    &:first-child,
    &:last-child {
      /* width: 300px; */
    }

    &.drop-left {
      width: 250px;
      border: 2px dashed lavender;
    }

    &.center-drop {
      flex-grow: 2;
      border: 2px solid blueviolet;
    }

    &.options {
      width: 250px;
      border: 2px dashed lavender;
    }
  }

  .drop-zone {
    border: 3px dashed goldenrod;
    margin: 0.5em;
    height: inherit;
  }

  .widget {
    border: 1px solid limegreen;
    padding: 0.25em;
    margin: 0.5em;

    h4 {
      margin-top: 0;
      margin-bottom: 0.25em;
      color: burlywood;
    }

    p {
      margin: 5px 0;
    }
  }
`;

interface Widget {
  id: string;
  name: string;
  value: string | number;
}

const widgets: Widget[] = [
  { name: 'Widget 1', value: '1', id: '283749274' },
  { name: 'Widget 2', value: '2', id: '928492842' },
  { name: 'Widget 3', value: '3', id: '412381934' },
];

const widgetsMap = new Map(widgets.map((w) => [w.id, w]));

export function Container(props: ContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [widgetList, setWidgetList] = useState<Widget[]>(widgets);
  const [droppedItems, setDroppedItems] = useState<Widget[]>([]);
  const [widgetsLookup] = useState<Map<string, Widget>>(widgetsMap);

  useEffect(() => {
    console.log('mounted');
  }, []);

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('drag start event', event);
  };

  const onDrag = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('drag event', event);
    if (ref.current) {
      console.log('drag event ref = ', ref.current.id);
    }
  };

  const drop = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('drop event', event);
  };

  return (
    <StyledContainer>
      <section className="drop-left">
        <h4>Drop zone</h4>
        <div className="drop-zone" onDrop={drop}>
          {droppedItems.map((widget, index: number) => (
            <div key={index} className="widget">
              <h4>{widget.name}</h4>
              <p>
                <em>Value</em> {widget.value}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="center-drop">
        <h4>Configuration</h4>
        <div className="config" />
      </section>
      <section className="options">
        <h4>Options</h4>
        <div className="list">
          {widgetList.map((widget, index) => (
            <div
              key={index}
              className="widget"
              id={`id-${widget.id}`}
              ref={ref}
              draggable
              onDragStart={onDragStart}
              onDrag={onDrag}
              onDrop={drop}
            >
              <h4>{widget.name}</h4>
              <p>
                <em>Value</em> {widget.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </StyledContainer>
  );
}

export default Container;
