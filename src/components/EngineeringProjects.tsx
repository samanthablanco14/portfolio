import React from "react";
import "../assets/styles/EngineeringProjects.scss";

function EngineeringProjects() {
  return (
    <div className="engineering-projects-container" id="engineering-projects">
      <h1>Engineering Projects</h1>

      <div className="engineering-projects-grid">
        <div className="engineering-project-card">
          <h2>SMR-Enabled Resilient Microgrids</h2>
          <h4>Feb 2026 – Present</h4>

          <div className="project-tags">
            <span>Literature Review</span>
            <span>Energy Systems</span>
            <span>Grid Resilience</span>
          </div>

          <p>
            Conducted comparative research on small modular reactors,
            solar-plus-storage, diesel generation, and natural gas for
            critical-infrastructure microgrid applications.
          </p>

          <p>
            Evaluated technologies using resilience criteria such as
            dispatchability, duration capability, carbon emissions, fuel
            security, siting, licensing, and cost tradeoffs.
          </p>

          <p>
            Synthesized findings into a technical paper and poster focused on
            the suitability of SMRs for resilient microgrid applications.
          </p>
        </div>

        <div className="engineering-project-card">
          <h2>Power Systems Analysis</h2>
          <h4>Feb 2026 – Apr 2026</h4>

          <div className="project-tags">
            <span>PowerWorld</span>
            <span>Python</span>
            <span>Grid Analysis</span>
          </div>

          <p>
            Modeled power system operating scenarios in PowerWorld, including
            load variations and line contingency cases, to evaluate grid
            behavior under changing system conditions.
          </p>

          <p>
            Analyzed active and reactive power responses across buses and system
            scenarios using structured data tables and Python-based
            visualizations.
          </p>

          <p>
            Developed technical plots and summaries to interpret voltage
            response, contingency impacts, and overall system performance
            trends.
          </p>
        </div>

        <div className="engineering-project-card">
          <h2>Energy-Saving Guide for University Building</h2>
          <h4>Bachelor’s Thesis</h4>

          <div className="project-tags">
            <span>Energy Audit</span>
            <span>Consumption Analysis</span>
            <span>Sustainability</span>
          </div>

          <p>
            Developed an energy-saving guide for a building at Universidad
            Católica Santa María la Antigua as part of my bachelor’s thesis.
          </p>

          <p>
            Conducted an energy audit and analyzed building consumption patterns
            to identify opportunities for reducing energy use and improving
            efficiency.
          </p>

          <p>
            Proposed practical recommendations to support lower consumption,
            improved energy awareness, and a more sustainable building
            environment.
          </p>
        </div>

        <div className="engineering-project-card">
          <h2>VLSI Design</h2>
          <h4>Jan 2025 – Dec 2025</h4>

          <div className="project-tags">
            <span>Cadence Virtuoso</span>
            <span>CMOS Design</span>
            <span>Circuit Layout</span>
          </div>

          <p>
            Designed and analyzed transistor-level circuit layouts using Cadence
            Virtuoso as part of graduate VLSI design coursework.
          </p>

          <p>
            Created schematic and layout views for CMOS-based circuit designs,
            with attention to layout structure, design flow, and circuit
            behavior.
          </p>

          <p>
            Gained exposure to VLSI design methodology, semiconductor design
            tools, and layout-level implementation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EngineeringProjects;
