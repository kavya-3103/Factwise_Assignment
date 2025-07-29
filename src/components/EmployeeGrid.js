// src/components/EmployeeGrid.js
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ModuleRegistry } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";
import { employees } from "../data/employees";

// Register AG Grid Community Module
ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeeGrid = () => {
  const [quickFilter, setQuickFilter] = useState("");

  const [columnDefs] = useState([
    { field: "id", headerName: "ID", sortable: true, filter: true },
    { field: "firstName", sortable: true, filter: true },
    { field: "lastName", sortable: true, filter: true },
    { field: "email", sortable: true, filter: true },
    { field: "department", sortable: true, filter: true },
    { field: "position", sortable: true, filter: true },
    { field: "salary", sortable: true, filter: "agNumberColumnFilter" },
  ]);

  const defaultColDef = {
    autoHeight: true,
    minWidth: 100,
    resizable: true,
  };

  const handleGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Segoe UI, sans-serif" }}>
      <h2 style={{ textAlign: "center", fontWeight: 600, marginBottom: 20 }}>
        📊 Employee Dashboard
      </h2>

      <input
        type="text"
        placeholder="🔍 Search employees..."
        onChange={(e) => setQuickFilter(e.target.value)}
        style={{
          marginBottom: "15px",
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "14px",
        }}
      />

      <div className="ag-theme-alpine" style={{ height: 600, width: "100%" }}>
        <AgGridReact
          rowData={employees}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          quickFilterText={quickFilter}
          pagination={true}
          paginationPageSize={10}
          onGridReady={handleGridReady}
        />
      </div>
    </div>
  );
};

export default EmployeeGrid;
