
export interface ExcomMember {
    id: string;
    name: string;
    role: string;
    category: "Core" | "Tech" | "Ops" | "Creative" | "Finance" | "Marketing" | "Publicity" | "Resources" | "IPR" | "Community" | "Innovation";
    image: string;
    responsibilities: string[];
}

const responsibilitiesMap = {
    CEO: [
        "Lead the IEDC Executive Committee and represent the cell officially.",
        "Oversee all departments and ensure each team is functioning effectively.",
        "Set the vision, mission, and yearly roadmap for IEDC.",
        "Conduct regular review meetings to track progress across teams.",
        "Approve event proposals, budgets, and major decisions.",
        "Act as the main point of contact with faculty, management, and external bodies.",
        "Monitor the outcomes of events and initiatives.",
        "Encourage accountability and leadership within the team.",
        "Check IEDC emails regularly and forward important updates to concerned members.",
        "Resolve conflicts and inspire a positive, innovation-driven culture."
    ],
    CTO: [
        "Lead the technical division and oversee all innovation-driven projects.",
        "Mentor student teams in technical execution and product development.",
        "Organize hackathons, coding events, and tech-based competitions.",
        "Develop and maintain the official IEDC website.",
        "Update the website regularly with event info, achievements, and team details.",
        "Support the Engravers team in converting ideas into prototypes.",
        "Conduct technical workshops and upskilling sessions.",
        "Form sub-teams for web dev, app dev, or hardware-based tasks.",
        "Collaborate with IPR and Creative teams for documentation and visuals.",
        "Stay updated with new technologies and trends."
    ],
    COO: [
        "List out the yearly programs and build event execution plans.",
        "Design the program flow, timeline, and checklist for each event.",
        "Handle event logistics including stage, seating, tech, and hospitality.",
        "Select, manage, and lead the volunteer and coordination teams.",
        "Ensure availability of all materials and resources needed for events.",
        "Oversee food, refreshment, and accommodation arrangements (if needed).",
        "Conduct pre-event dry runs and post-event clean-up.",
        "Work closely with all teams to ensure on-time execution.",
        "Resolve real-time operational challenges during events.",
        "Document operational workflows and improve efficiency."
    ],
    CMO: [
        "Create unique and creative marketing strategies for each event.",
        "Plan campaign timelines including pre, live, and post promotions.",
        "Collaborate with CCO and CPO for promotional content and reach.",
        "Run social media campaigns on Instagram, LinkedIn, WhatsApp, etc.",
        "Use trending formats like reels, memes, and influencer posts.",
        "Connect with student clubs or brands for cross-promotions.",
        "Build hype using teasers, countdowns, and contests.",
        "Track engagement metrics to assess campaign success.",
        "Ensure the brand language aligns with IEDC’s identity.",
        "Promote IEDC’s values and achievements beyond events."
    ],
    CCO: [
        "Lead the design and visual content creation for IEDC.",
        "Design all posters, certificates, and event branding assets.",
        "Shoot and edit promotional videos and aftermovies.",
        "Capture high-quality event photographs and organize them.",
        "Maintain IEDC’s visual consistency across platforms.",
        "Collaborate with CMO to design impactful campaigns.",
        "Support storytelling through presentation decks and visuals.",
        "Manage a digital archive of all creatives and media.",
        "Coordinate with external media/design professionals (if needed).",
        "Promote visual creativity and innovation throughout the team."
    ],
    CRO: [
        "Maintain physical and digital resources for IEDC.",
        "Create and manage Google Drive folders for every event.",
        "Store bills, invoices, and financial records in coordination with CFO.",
        "Collect and organize feedback forms and event reports.",
        "Archive event media like photos, reels, and videos.",
        "Track inventory of kits, tools, and consumables.",
        "Ensure team access to necessary files and folders.",
        "Maintain a clean and searchable folder structure.",
        "Assist in preparing annual reports with documentation.",
        "Make sure all materials are ready before every event."
    ],
    CPO: [
        "Promote each event widely using strategic publicity methods.",
        "Monitor the program’s reach pre, during, and post event.",
        "Collaborate with CMO and CCO for publicity materials.",
        "Leverage all channels—social media, WhatsApp, posters, etc.",
        "Ensure publicity in every department and year group.",
        "Track number of registrations and footfall per event.",
        "Collect data on engagement and visibility.",
        "Drive creative offline publicity like flash mobs or class promos.",
        "Maintain records of publicity performance and outcomes.",
        "Maximize awareness and participation for every initiative."
    ],
    IPR: [
        "Promote awareness about Intellectual Property Rights.",
        "Assist students in identifying ideas suitable for patenting.",
        "Help in drafting and filing IPR applications (patents/copyrights).",
        "Conduct IPR training sessions and awareness workshops.",
        "Track the number of filed and accepted IPRs under IEDC.",
        "Encourage participation in hackathons and competitions.",
        "Mentor teams on originality and protectable innovation.",
        "Coordinate with CTO for technical support on IPR filings.",
        "Maintain a database of all filed IPRs and statuses.",
        "Collaborate with innovation mentors or legal advisors if needed."
    ],
    WomenLead: [
        "Promote and support female participation in IEDC activities.",
        "Organize women-centric events, leadership talks, and workshops.",
        "Be a point of contact for any female student seeking guidance.",
        "Ensure inclusivity in team composition and panel selections.",
        "Celebrate women-led initiatives and projects.",
        "Promote women innovators through social media and events.",
        "Connect with women-focused entrepreneur networks or schemes.",
        "Encourage women to convert hobbies into side hustles.",
        "Mentor women in building confidence and skills.",
        "Foster a safe, supportive, and empowering environment."
    ],
    HobbyHub: [
        "Promote student hobbies like art, crafts, music, etc.",
        "Organize hobby-based sessions (DIYs, music jams, etc.).",
        "Support students in converting hobbies into creative products.",
        "Conduct 'Hobby Market' events to help students sell their work.",
        "Collaborate with CMO for promotion and CFO for handling payments.",
        "Build a network of hobbyists across departments.",
        "Spotlight student talents via IEDC platforms.",
        "Encourage participation in creative contests or showcases.",
        "Host de-stress and creativity sessions during peak periods.",
        "Promote creativity as part of entrepreneurship culture."
    ],
    Engravers: [
        "Lead 3D printing and prototyping initiatives.",
        "Train students in 3D modeling and printing tools.",
        "Support product development and iteration processes.",
        "Maintain lab equipment and ensure tool availability.",
        "Document technical steps for IPR and presentations.",
        "Collaborate with CTO for technical alignment.",
        "Coordinate with CRO for inventory needs.",
        "Assist student teams with design-for-manufacturing.",
        "Showcase products in innovation expos or demos.",
        "Encourage hands-on creativity and maker mindset."
    ]
};

const cfoDuties = [
    "Manage IEDC's financial accounts and budget allocation.",
    "Track income and expenses for all events.",
    "Coordinate with CRO for bills and invoice management.",
    "Ensure timely reimbursement and vendor payments.",
    "Prepare financial reports for audits.",
    "Work with the college administration for fund approvals.",
    "Advise on cost-effective strategies for events.",
    "Maintain transparency in all financial transactions.",
    "Plan fundraising activities if needed.",
    "Oversee sponsorship financial management."
];

export const excomMembers: ExcomMember[] = [
    // Core
    { id: "ceo", name: "Abin Stanislaus", role: "CEO", category: "Core", image: "/assets/ceo.png", responsibilities: responsibilitiesMap.CEO },
    { id: "co-ceo", name: "Ayswarya E S", role: "CO-CEO", category: "Core", image: "/assets/coceo.png", responsibilities: responsibilitiesMap.CEO },

    // Tech
    { id: "cto", name: "Alfred Anto", role: "CTO", category: "Tech", image: "/assets/cto.png", responsibilities: responsibilitiesMap.CTO },
    { id: "co-cto", name: "Farhan M Jeejo", role: "CO-CTO", category: "Tech", image: "/assets/cocto.png", responsibilities: responsibilitiesMap.CTO },

    // Ops
    { id: "coo", name: "Kshithij V R", role: "COO", category: "Ops", image: "/assets/coo.png", responsibilities: responsibilitiesMap.COO },
    { id: "co-coo", name: "Tharun Krishna C U", role: "CO-COO", category: "Ops", image: "/assets/cocoo.png", responsibilities: responsibilitiesMap.COO },

    // Marketing
    { id: "cmo", name: "Gibin C Jijo", role: "CMO", category: "Marketing", image: "/assets/cmo.png", responsibilities: responsibilitiesMap.CMO },
    { id: "co-cmo", name: "Parvathy Dilip", role: "CO-CMO", category: "Marketing", image: "/assets/cocmo.png", responsibilities: responsibilitiesMap.CMO },

    // Finance
    { id: "cfo", name: "Ann Johnson", role: "CFO", category: "Finance", image: "/assets/cfo.png", responsibilities: cfoDuties },
    { id: "co-cfo", name: "Savio Jerry", role: "CO-CFO", category: "Finance", image: "/assets/cocfo.png", responsibilities: cfoDuties },

    // Publicity
    { id: "cpo", name: "Jewel E J", role: "CPO", category: "Publicity", image: "/assets/cpo.png", responsibilities: responsibilitiesMap.CPO },
    { id: "co-cpo", name: "H Athila", role: "CO-CPO", category: "Publicity", image: "/assets/cocpo.png", responsibilities: responsibilitiesMap.CPO },

    // Creative
    { id: "cco", name: "Abhinand Venugopal", role: "CCO", category: "Creative", image: "/assets/cco.png", responsibilities: responsibilitiesMap.CCO },
    { id: "co-cco", name: "Sidharth S Menon", role: "CO-CCO", category: "Creative", image: "/assets/cocco.png", responsibilities: responsibilitiesMap.CCO },

    // Resources
    { id: "cro", name: "Patricia Paul", role: "CRO", category: "Resources", image: "/assets/cro.png", responsibilities: responsibilitiesMap.CRO },
    { id: "co-cro", name: "Hridya", role: "CO-CRO", category: "Resources", image: "/assets/cocro.png", responsibilities: responsibilitiesMap.CRO },

    // IPR
    { id: "ipr", name: "Edwin Shaju Malakaran", role: "IPR Head", category: "IPR", image: "/assets/ipr.png", responsibilities: responsibilitiesMap.IPR },
    { id: "co-ipr", name: "Sooryakrishna P R", role: "CO-IPR", category: "IPR", image: "/assets/coipr.png", responsibilities: responsibilitiesMap.IPR },

    // Women Lead
    { id: "women-lead", name: "Anna Shaju", role: "Women Lead", category: "Community", image: "/assets/women.png", responsibilities: responsibilitiesMap.WomenLead },
    { id: "co-women-lead", name: "Agnes Shanoj", role: "Co-Lead (Women)", category: "Community", image: "/assets/cowomen.png", responsibilities: responsibilitiesMap.WomenLead },

    // Hobby Hub
    { id: "hobby-lead", name: "Iris Wilson", role: "Hobby Hub Lead", category: "Community", image: "/assets/hobby.png", responsibilities: responsibilitiesMap.HobbyHub },
    { id: "co-hobby-lead", name: "Pranaya", role: "CO-Hobby Hub", category: "Community", image: "/assets/cohobby.png", responsibilities: responsibilitiesMap.HobbyHub },

    // Engravers
    { id: "engravers-lead", name: "Goury Shankar", role: "Engravers Lead", category: "Innovation", image: "/assets/engravers.png", responsibilities: responsibilitiesMap.Engravers },
    { id: "co-engravers-lead", name: "Mishael Mathew", role: "CO-Engravers", category: "Innovation", image: "/assets/coengravers.png", responsibilities: responsibilitiesMap.Engravers },
];
