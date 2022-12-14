import React from 'react';
import { VictoryPie } from 'victory';

const SalesReport = () => {
    return (
        <div>
            <VictoryPie
                height={200}
                colorScale={["#103178", "#fd8d27", "#c7f4faa3"]}
                data={[
                    { x: "December", y: 36 },
                    { x: "November", y: 34 },
                    { x: "October", y: 30 }
                ]}
                style={{
                    data: {
                        fillOpacity: 0.9, stroke: "#fff", strokeWidth: 3
                    },
                    labels: {
                        fontSize: 8, fill: "#103178"
                    }
                }}
            />
        </div>
    );
};

export default SalesReport;