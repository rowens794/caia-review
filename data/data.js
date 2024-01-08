export const data = {
  0: {},
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {
    8.1: {
      "learning objectives": [
        {
          objective:
            "Demonstrate knowledge of the fundamental law of active management (FLOAM)",
        },
        {
          objective:
            "Interpret the central relation equation of the FLOAM and the calculation of components",
        },
        {
          objective:
            "Calculate the transfer coefficient using a modified version of the FLOAM",
        },
        {
          objective:
            "Recognize the tradeoff between the information coefficient and breadth and its key driver",
        },
        {
          objective:
            "Demonstrate knowledge of costs related to actively reallocating across alternative investments",
        },
        {
          objective:
            "Understand incentive fees, foregone loss carryforward costs, and the calculation of after-fee return",
        },
        {
          objective:
            "Identify two potential costs of staying with a manager below its high-water mark",
        },
        {
          objective:
            "Recognize two types of potential costs of replacing managers unrelated to incentive fees",
        },
        {
          objective:
            "Demonstrate knowledge of successful tactical asset allocation process",
        },
        {
          objective: "Understand the TAA process and return predictability",
        },
        {
          objective:
            "Understand the TAA process and model-based return prediction",
        },
        {
          objective:
            "Identify important characteristics of sound TAA model development",
        },
        {
          objective: "Describe an unconditional analysis using SAA models",
        },
        {
          objective: "Conduct conditional analyses using TAA models",
        },
        {
          objective: "describe technical analysis underlying TAA models",
        },
        {
          objective:
            "Demonstrate knowledge of adjusting exposures to illiquid partnerships",
        },
        {
          objective: "Identify the primary markets for PE funds",
        },
        {
          objective: "Recognize PE funds as intermediaries",
        },
        {
          objective: "Understand PE fund incentives and terms",
        },
      ],
      definitions: [
        {
          term: "Fundamental Law of Active Management (FLOAM)",
          definition:
            "Expresses the risk-adjusted value added by an active portfolio manager as a function of the manager's skill to forecast asset returns and the number of markets to which the manager's skill can be applied.",
        },
        {
          term: "Information Coefficient (IC)",
          definition:
            "A measure of the manager's skill and represents the correlation between the manager's forecast of asset returns and the actual returns to those assets.",
        },
        {
          term: "Transfer Coefficient (TC)",
          definition:
            "Measures the ability of the manager to implement her recommendations. It has an upper limit of one and a lower limit of zero, and indicates the correlation between the forecasted active returns and the active weights.",
        },
        {
          term: "Information Ratio (IR)",
          definition:
            "Equal to the ratio of the manager's estimated alpha (i.e., risk-adjusted expected outperformance) divided by the estimated volatility of that alpha.",
        },
        {
          term: "Breadth (BR)",
          definition:
            "The number of independent forecasts (or 'bets') that the manager can skillfully make during a given period of time (e.g., 1 year).",
        },
        {
          term: "Incentive Fees",
          definition:
            "Fees charged by a fund manager based on the fund's performance, typically a percentage of the profits earned.",
        },
        {
          term: "Foregone Loss Carryforward",
          definition:
            "An opportunity cost borne by investors in a fund with an asymmetric incentive fee structure, arising from the inability to recapture incentive fees.",
        },
        {
          term: "Unconditional Empirical Analysis Approach to Asset Allocation",
          definition:
            "An approach that does not account for current economic conditions or market states in forming asset allocation weights, relying instead on long-term historical data.",
        },
        {
          term: "Conditional Empirical Approach to Asset Allocation",
          definition:
            "Uses the current condition of the economy and markets, along with empirical measures such as volatilities and correlations, within a Tactical Asset Allocation (TAA) approach to form asset weights that change with current conditions.",
        },
      ],
      questions: [
        {
          question:
            "Suppose active manager A has the skill to select stocks from a universe of 150 securities and generate an information ratio (IR) of 1.4. Active manager B can generate the same information ratio (1.4) using 20 asset classes. What are the managers' information coefficients?",
          answer:
            "Active manager A has an information coefficient of 0.114 (rounded): 1.4 = IC × 150, IC = 0.114. Active manager B has an information coefficient of 0.313 (rounded): 1.4 = IC × 20, IC = 0.313.",
        },
        {
          question:
            "Consider two similarly skilled active managers each with an information coefficient (IC) of 0.40. Active manager X can apply his skills to only 15 asset classes whereas active manager Y can apply her skills to 150 securities. What level of transfer coefficient (TC) does each manager need to have in order to generate an information ratio (IR) of 1.1?",
          answer:
            "Using Equation 2 from the Fundamental Law of Active Management lesson: IR = IC × √BR × TC. Active Manager X (rounded): 1.1 = 0.40 × √BR × TC, Active Manager Y (rounded): 1.1 = 0.40 × √BR × TC.",
        },
        {
          question:
            "Suppose that in the previous exercise there is a third active manager Z having the same information coefficient as managers X and Y. Manager Z can apply his skills to only 8 asset classes. What level of transfer coefficient does he need to have in order to generate the same information ratio as managers X and Y?",
          answer: "1.1 = 0.40 x √8 × TC, TC = 0.972",
        },
        {
          question:
            "Suppose that a manager experienced a drawdown of 30% and has been replaced by a new manager. Assuming a 15% performance fee, how much will the new manager have to earn for the investor to break even?",
          answer:
            "The new manager will have to earn 50.42%, calculated as (1/0.7) - 1 = 0.4286; then 0.4286 / (1 - 0.15) = 0.5042 or 50.42%.",
        },
      ],
      formulas: [
        {
          name: "Central Relation of the FLOAM",
          formula: "Information Ratio = Information Coefficient × √Breadth",
        },
        {
          name: "Modified Version of the FLOAM",
          formula:
            "Information Ratio = Information Coefficient × √Breadth x Transfer Coefficient",
        },
      ],
    },
  },
  9: {},
};
