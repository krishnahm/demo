import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { team_interface } from './team_Modal';

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {

  bod_team: team_interface[] = [
    {
      fullName: "Steve Gorlin",
      firstName: 'Steve',
      headshot: './assets/boardOfDirectors/02_BoDTeam/stills/steve-bw.jpg',
      position: 'Director',
      miniBio: 'Steve Gorlin has founded several biotechnology and pharmaceutical companies, including Hycor Biomedical, Inc. (acquired by Agilent)',
      longBio: "Steve Gorlin has founded several biotechnology and pharmaceutical companies, including Hycor Biomedical, Inc. (acquired by Agilent), Theragenics Corporation, CytRx Corporation, Medicis Pharmaceutical Corporation (sold to Valeant for approximately $2.6 billion), EntreMed, Inc., MRI Interventions (MRIC), MiMedx, and Medivation, Inc. during the past 40 years. Mr. Gorlin has served on the Business Advisory Council to the Johns Hopkins School of Medicine and on The Johns Hopkins BioMedical Engineering Advisory Board. He also serves on the Board of the Andrews Institute. He also  founded a number of non-medical related companies, including Perma-Fix, Inc., Pretty Good Privacy, Inc. sold to Network Associates, Judicial Correction Services, Inc. sold to Correctional Healthcare, and NTC China. He started The Touch Foundation, a nonprofit organization for the blind and was a principal financial contributor to the founding of Camp Kudzu for diabetic children. He presently serves as the Vice Chairman of NantKwest, and serves on the Board of NTC China, Inc."
    },
    {
      fullName: "Jon Mogford, PhD",
      firstName: 'Jon',
      headshot: './assets/boardOfDirectors/02_BoDTeam/stills/jon-bw.jpg',
      position: 'Director',
      miniBio: 'Dr. Jon Mogford, has served in various capacities for the Texas A&M University System. Since May 2013, Dr. Mogford has served as the Vice Chancellor for Research, from August 2012..',
      longBio: "Dr. Jon Mogford, has served in various capacities for the Texas A&M University System. Since May 2013, Dr. Mogford has served as the Vice Chancellor for Research, from August 2012 until April 2013 he served as the Chief Research Officer and from November 2011 until August 2012 he served as Associate Vice Chancellor for Strategic Initiatives at Texas A&M. Prior to joining the Texas A&M in 2011, from February 2010 until October 2011, Dr. Mogford served as Deputy Director of the Defense Sciences Office (DSO) of the Defense Advanced Research Projects Agency (DARPA) in the U.S. Department of Defense. From July 2005 until January 2009, Dr. Mogford served as Program Manager of DSO of DARPA. In addition, since November 2016, Dr. Mogford has served as a member of the board of directors of Medovex Corp. Dr. Mogford is the recipient of the Secretary of Defense Medal for Outstanding Public Service. Dr. Mogford received his bachelor’s degree in Zoology from Texas A&M University and doctorate in Medical Physiology from the Texas A&M University Health Science Center. His research in vascular physiology continued at the University of Chicago as a Postdoctoral fellow from 1997 until 1998. Dr. Mogford transitioned his research focus to the field of wound healing at Northwestern University, both as a Research Associate and also as a Research Assistant Professor from 1998 until 2003. He then served as a Life Sciences Consultant to DARPA on the Revolutionizing Prosthetics program from December 2003 until June 2005. Dr. Mogford experience and research in regenerative medicine is particularly helpful as a board member. "
    },
    {
      fullName: "Minnie Baylor-Henry, JD ",
      firstName: 'Minnie',
      headshot: './assets/boardOfDirectors/02_BoDTeam/stills/henry-bw.jpg',
      position: 'Director',
      miniBio: 'Minnie Baylor-Henry is a regulatory affairs leader who provides regulatory strategic support services to life sciences companies through her consulting firm',
      longBio: 'Minnie Baylor-Henry is a regulatory affairs leader who provides regulatory strategic support services to life sciences companies through her consulting firm, B-Henry & Associates. Before starting her consulting company, Ms. Baylor-Henry was employed by Johnson & Johnson and members of the J&J health care group in a number of positions, including: Worldwide Vice President Regulatory Affairs - Medical Devises, Vice President - Medical & Regulatory Affairs – Specialty Pharmaceuticals, and Vice President-Regulatory Affairs – Over-the-Counter Products, and Senior Director, Regulatory Affairs. Ms. Baylor-Henry also served as the National Director Regulatory Affairs Life Sciences for Deloitte. In addition, Ms. Baylor-Henry served for nearly in decade in several positions with the U.S. Food & Drug Administration, including Director/Branch Chief – Division of Drug Marketing, Advertising and Communications, National Health Fraud Coordinator – Office of Regulatory Affairs/ Federal/ State Relations, and Regulatory Review Officer.  Ms. Baylor-Henry also serves as a Director of scPharmaceuticals, Inc., a publicly-held company engaged in the business of developing technologies that enable the subcutaneous administration of therapies that have previously been limited to intravenous delivery. Ms. Baylor-Henry received her pharmacy degree from Howard University’s College of Pharmacy and a law degree from Catholic University’s Columbus School of Law.'
    },
    {
      fullName: "Willie Bogan, JD",
      firstName: 'Willie',
      headshot: './assets/boardOfDirectors/02_BoDTeam/stills/willie-bw.jpg',
      position: 'Director',
      miniBio: 'Willie Bogan, JD served as Associate General Counsel and Corporate Secretary of McKesson Corporation, a San Francisco-based healthcare services and information technology company.',
      longBio: 'Willie Bogan served as Associate General Counsel and Corporate Secretary of McKesson Corporation, a San Francisco-based healthcare services and information technology company, from July 2009 until his retirement in November 2015. He joined McKesson in November 2006 as Associate General Counsel and Assistant Secretary.  Before joining McKesson, Mr. Bogan held senior advisory positions at four other public companies in the San Francisco Bay Area – Bank of America, Safeway, Charles Schwab and Catellus Development Corporation.  Prior to becoming in-house counsel, he was a partner at Steinberg, Miller, Bogan & Goldstein in Manhattan Beach, California.During his tenure as a business and securities attorney, Mr. Bogan was involved in a variety of substantial commercial transactions and was an advisor to directors and executive management in the boardroom. Through this, Mr. Bogan acquired significant business and financial experience, including in relation to lending, borrowing, hedging, capital deployment, financial results, mergers and acquisitions, risks and risk management. Regarding healthcare, he acquired significant insight into supply chain systems and activities, and into the nature, opportunities and challenges of healthcare technology businesses. Mr. Bogan also has extensive corporate governance experience. Mr. Bogan graduated Phi Beta Kappa and Summa Cum Laude from Dartmouth College, where he majored in Spanish. He earned an MA degree in Politics and Economics from Oxford University, where he studied as a Rhodes Scholar, and a JD degree from Stanford Law School. While at Dartmouth, Mr. Bogan was an All-Ivy, All New-England, All-East and Academic-All American defensive back on the undefeated and nationally ranked 1970 football team and was drafted by the then Baltimore Colts. In addition, he was named a National Football Foundation and Hall of Fame scholar-athlete. In 1989, he was inducted into the Academic All-America Hall of Fame, an honor that recognizes former Academic All-Americans for career achievements and community service. In 2013, Mr. Bogan was honored by the Ivy Football Association, which recognizes distinguished alumnus from Ivy institutions who achieve prominence in his chosen field. Mr. Bogan has been involved in many additional professional and community activities throughout his career including chairing and serving on boards for various organizations including the San Francisco Bar Association and student programs like the Boys and Girls Clubs.'
    },
    {
      fullName: "Peter Cohen ",
      firstName: 'Peter',
      headshot: './assets/boardOfDirectors/02_BoDTeam/stills/cohen-bw.jpg',
      position: 'Director',
      miniBio: 'Mr. Cohen previously served on the Board of Directors at the NYSE, as well as previously serving as the CEO and Chairman of the Board of Cowen Inc.',
      longBio: "Mr. Cohen previously served on the Board of Directors at the NYSE, as well as previously serving as the CEO and Chairman of the Board of Cowen Inc., Shearson Lehman Cowen, and Republic New York Securities. Mr. Cohen is currently a Trustee of Mount Sinai Medical Center, a Member of the Board of Directors of Quadrant Biosciences, Inc., and Vice Chairman and Lead Director of the Board of Directors of Scientific Games Corporation. Additionally, Mr. Cohen has previously served on a number of other corporate and industry boards, including The Federal Reserve International Capital Markets Advisory Committee, American Express, The Depository Trust Company, Telecom Italia SpA, Olivetti SpA, and Kroll Inc. He obtained a Masters of Business Administration from Columbia University in 1969 and a Bachelor of Science from The Ohio State University in 1968."
    },
    {
      fullName: "Jeff Dyer, MBA, PhD ",
      firstName: 'Jeff',
      headshot: './assets/boardOfDirectors/02_BoDTeam/stills/jeff-bw.jpg',
      position: 'Director',
      miniBio: 'Jeff Dyer is the Horace Beesley professor of strategy at Brigham Young University (BYU), as well as a professor of strategy at the Wharton School, University of Pennsylvania.',
      longBio: "Jeff Dyer is the Horace Beesley professor of strategy at Brigham Young University (BYU), as well as a professor of strategy at the Wharton School, University of Pennsylvania. Before becoming a professor, Mr. Dyer spent five years as a consultant and manager at Bain & Company. His Harvard Press books on innovation, The Innovator's DNA (with Clayton Christensen) and The Innovator's Method are business bestsellers, and his research has been featured in publications such as Forbes, Economist, Fortune, BusinessWeek and the Wall Street Journal. Mr. Dyer is the only strategy scholar in the world to have published at least 6 times in both Harvard Business Review and Strategic Management Journal (the top academic journal in strategy). He was recently ranked #1 on a list of 'most influential management scholars' based upon academic citations and Google searches to his name (among management scholars who received their PhD's after 1990). Mr. Dyer is co-founder of Innovator's DNA LLC, a fast growing innovation consultancy, and has consulted with such companies as Adobe, AT&T, Cisco, Gilead Sciences, Johnson and Johnson, Life Technologies, Magellan Health, Microsoft, NuVasive, and United Technologies. "
    },
    {
      fullName: "Ramses (Rainer) Erdtmann ",
      firstName: 'Ramses',
      headshot: './assets/boardOfDirectors/02_BoDTeam/stills/ramses-bw.png',
      position: 'Director',
      miniBio: 'Mr. Erdtmann is a Managing Partner at Point Sur Investors, a biotech investment fund focused on innovative therapies.',
      longBio: "Mr. Erdtmann is a Managing Partner at Point Sur Investors, a biotech investment fund focused on innovative therapies. Mr. Erdtmann previously worked at Pharmacyclics from 2008 through 2015 and remained with AbbVie as a consultant until 2016 post the acquisition of Pharmacyclics by AbbVie. During his time at Pharmacyclics, Mr. Erdtmann witnessed and helped grow Pharmacyclics from 47 employees and a market cap of $20 Million, to 634 employees and a market cap of $21 Billion. Mr. Erdtmann oversaw several departments and helped Pharmacyclics evolve into a fully integrated biotech company. He held a number of roles and, at various times, also had responsibility for Accounting, SEC Reporting, Audits, Corporate Communications and Investor Relations. He worked closely with the CEO and the Audit and Compensation Committee. Mr. Erdtmann actively participated in the final execution of key corporate milestones for Pharmacyclics, including the Collaboration Agreement with Johnson & Johnson in 2011 and the Merger Agreement with AbbVie in 2015."
    },
    {
      fullName: "David Seaburg",
      firstName: 'David',
      headshot: './assets/boardOfDirectors/02_BoDTeam/stills/david-bw.jpg',
      position: 'Director',
      miniBio: 'Mr. Seaburg is a Managing Director and Head of Sales Trading at Cowen, Inc., a leading healthcare franchise in equities research, sales and trading and investment banking.',
      longBio: "Mr. Seaburg is a Managing Director and Head of Sales Trading at Cowen, Inc., a leading healthcare franchise in equities research, sales and trading and investment banking. Over the course of his more than 20 year career at Cowen in both Equity Sales Trading and Trading, Mr. Seaburg has advanced to increasingly senior roles at the firm. In 2006, Mr. Seaburg was named Head of Sales Trading and appointed to the firm's Equity Operating Committee. In his role at Cowen, Mr. Seaburg has interacted with thousands of healthcare investors and company management teams. Mr. Seaburg is a CNBC Fast Money Contributor and provides regular on-air market commentary for the network."
    },
    {
      fullName: "Denver Lough, MD, PhD",
      firstName: 'Denver',
      headshot: './assets/management-assets/02_managementTeam/images/denver-bw.jpg',
      position: 'Chairman of the Board, CEO, Chief R&D Officer' ,
      miniBio: 'Dr. Denver Lough has always sought to investigate reality, pursue complex simplicity and develop a new paradigm in translational science. ',
      longBio: "Dr. Denver Lough has always sought to investigate reality, pursue complex simplicity and develop a new paradigm in translational science. He is the President, Chief Executive Officer and Chairman of PolarityTE, and discoverer of micro-aggregate cell-based technologies for applications in the regeneration of functionally-polarized tissues. A prior member of the Johns Hopkins Plastic and Reconstructive Surgery Residency Program, Dr. Lough's interests surround pragmatic tissue engineering, deployable regenerative material constructs, real-time assessment of cell-to-tissue fate, reactivity, functionality and, ultimately, therapeutic efficacy in complex living systems. Dr. Lough has significant experience with bench-to-bedside translational applications from assays/equipment to IRB/clinical trial development to scientific writing and presenting. He is well-respected within the field by thought leaders, with numerous national awards and accolades, as well as the ability to access a wide variety of clinical and research networks and markets. Dr. Lough holds an MD and PhD in Biochemistry, Molecular and Cell Biology from Georgetown University and was a Senior Plastic Surgery Resident at Johns Hopkins before leaving his position to start PolarityTE."

    },
  ];
  mgmnt_team: team_interface[] = [
    {
      fullName: "Denver Lough, MD, PhD",
      firstName: 'denver',
      headshot: './assets/management-assets/02_managementTeam/images/denver-bw.jpg',
      position: 'Chairman of the Board, CEO, Chief R&D Officer' ,
      miniBio: 'Dr. Denver Lough has always sought to investigate reality, pursue complex simplicity and develop a new paradigm in translational science. ',
      longBio: "Dr. Denver Lough has always sought to investigate reality, pursue complex simplicity and develop a new paradigm in translational science. He is the President, Chief Executive Officer and Chairman of PolarityTE, and discoverer of micro-aggregate cell-based technologies for applications in the regeneration of functionally-polarized tissues. A prior member of the Johns Hopkins Plastic and Reconstructive Surgery Residency Program, Dr. Lough's interests surround pragmatic tissue engineering, deployable regenerative material constructs, real-time assessment of cell-to-tissue fate, reactivity, functionality and, ultimately, therapeutic efficacy in complex living systems. Dr. Lough has significant experience with bench-to-bedside translational applications from assays/equipment to IRB/clinical trial development to scientific writing and presenting. He is well-respected within the field by thought leaders, with numerous national awards and accolades, as well as the ability to access a wide variety of clinical and research networks and markets. Dr. Lough holds an MD and PhD in Biochemistry, Molecular and Cell Biology from Georgetown University and was a Senior Plastic Surgery Resident at Johns Hopkins before leaving his position to start PolarityTE."

    },
    {
      fullName: "Edward Swanson, MD",
      firstName: 'edward',
      headshot: './assets/management-assets/02_managementTeam/images/ned-bw.jpg',
      position: 'Executive Vice President & Chief Operating Officer',
      miniBio: 'Dr. Edward W. Swanson graduated with honors from the School of Engineering and Applied Sciences at the University of Pennsylvania.',
      longBio: "Dr. Edward W. Swanson graduated with honors from the School of Engineering and Applied Sciences at the University of Pennsylvania, with a BAS in Applied Sciences in Biomedical Sciences in May 2007. His bioengineering background provided a framework of investigative thinking and a solutions oriented approach throughout the rest of his career focused on bridging the gap between translational and clinical medicine. He went on to graduate from Harvard Medical School, receiving an MD with Honors in May 2012. Throughout his training at the University of Pennsylvania and Harvard Medical School, he gained insight into a variety of fields at the basic science level and clinical research translation, including pancreatic cancer, traumatic brain injury, nanotechnology, tissue engineering, and vascularized composite allotransplantation. Following medical school, he joined the Johns Hopkins Plastic and Reconstructive Surgery Residency Program, where he focused on both the translational research approaches in regenerative medicine and vascularized composite allotransplantation, as well as patient outcomes within craniofacial surgery. His interests and goals remain focused on impacting patients’ lives clinically by translating innovative technology. Given the opportunity to develop the radical technological platform of PolarityTE into a clinical reality, Dr. Swanson elected to leave his plastic surgery career in December 2016."
    },
    {
      fullName: "Nikolai Sopko, MD, PhD",
      firstName: 'Nikolai',
      headshot: './assets/management-assets/02_managementTeam/images/nikolai -bw.jpg',
      position: 'Chief Scientific Officer & VP R&D',
      miniBio: 'Dr. Nikolai Sopko obtained his MD with honors from Case Western Reserve University and PhD in stem cell biology at the Cleveland Clinic as a graduate of the',
      longBio:'Dr. Nikolai Sopko obtained his MD with honors from Case Western Reserve University and PhD in stem cell biology at the Cleveland Clinic as a graduate of the National Institutes of Health Medical Scientist Training Program. He completed his surgical training at the Johns Hopkins James Buchanan Brady Urologic Institute as a Physician Scientist Scholar where he focused on regenerative reconstruction, tissue engineering, gene therapy, transplant modulation and tumor biology. He has over 60 published peer-reviewed articles and book chapters and is a speaker on regenerative medicine. Dr. Sopko is currently the Chief Scientific Officer and Vice President of Research and Development of PolarityTE where he applies his passion for patient care and basic science research to develop novel regenerative therapeutics for clinically challenging diseases.'
    },
    {
      fullName: 'Cameron Hoyler, JD',
      firstName: 'Cameron',
      headshot: './assets/management-assets/02_managementTeam/images/cameron-bw.jpg',
      position: 'General Counsel & EVP, Corporate Development & Strategy',
      miniBio: 'Prior to joining PolarityTE, Cameron Hoyler was an attorney at the international law firm of King & Spalding LLP.',
      longBio: 'Prior to joining PolarityTE, Cameron Hoyler was an attorney at the international law firm of King & Spalding LLP, where he practiced in the Life Sciences and Product Liability groups. Mr. Hoyler represented and counseled clients involved in disputes and transactions in a variety of settings, including product liability, employment, commercial, trademark, real estate and insurance coverage matters. While at King & Spalding, Mr. Hoyler devoted the vast majority of his practice to representing clients in the pharmaceutical and medical device industries, including Bristol-Myers Squibb Company, AstraZeneca Pharmaceuticals LP and McKesson Corporation, in addition to working for clients in other highly-regulated industries, such as Chevron U.S.A. Inc. and Monsanto Company. He earned his Bachelor of Arts from the University of Pennsylvania, and his Juris Doctor from the University of San Francisco School of Law.'
    },
    {
      fullName: "Paul Mann",
      firstName: 'Paul',
      headshot: './assets/management-assets/02_managementTeam/images/paul-bw.jpg',
      position: 'Chief Financial Officer',
      miniBio: 'Mr. Mann has nearly 20 years of financial industry experience, most recently as the Healthcare Portfolio Manager at Highbridge Capital Management.',
      longBio: 'Mr. Mann has nearly 20 years of financial industry experience, most recently as the Healthcare Portfolio Manager at Highbridge Capital Management. Prior to Highbridge, Mr. Mann held positions with Soros Fund Management, UBS Investment Group, Morgan Stanley and Deutsche Bank. Notably, Mr. Mann began his career as a scientist at Proctor and Gamble and is named as an inventor on patent applications for skincare compounds and technologies. Mr. Mann has an MA (Cantab) and an MEng from Cambridge University where he studied Natural Sciences and Chemical Engineering. He is a CFA charterholder.'
    },
    {
      fullName: 'Michael W. Neumeister, MD, FRCSC, FACS',
      firstName: 'Michael',
      headshot: './assets/management-assets/02_managementTeam/images/michael-bw.jpg',
      position: 'Chief Medical Officer',
      miniBio: 'Dr. Michael W. Neumeister is Professor and Chairman of the Department of Surgery and The Elvin G. Zook Endowed Chair in Plastic Surgery at Southern Illinois University School of Medicine in Springfield, IL.',
      longBio: "Dr. Michael W. Neumeister is Professor and Chairman of the Department of Surgery and The Elvin G. Zook Endowed Chair in Plastic Surgery at Southern Illinois University School of Medicine in Springfield, IL.  He received his medical degree from the University of Toronto and previously completed a degree in physiology and pharmacology at the University of Western Ontario. Dr. Neumeister began his residency at Dalhousie University in Halifax, Nova Scotia in general surgery and went on to complete his plastic surgery residency at the University of Manitoba. He continued his training as a microsurgery fellow at Harvard University’s Brigham & Women’s Hospital in Boston and completed a hand and microsurgery fellowship at Southern Illinois University School of Medicine. Dr. Neumeister is board certified in plastic surgery by the Royal College of Surgeons of Canada and the American Board of Plastic Surgery. He has also received a Certificate in Surgery of The Hand (SOTH). Dr. Neumeister has received awards for presentations given regionally, nationally and internationally, has more than 150 book chapters and articles, and has multiple research interests in tissue engineering and regenerative medicine. Dr. Neumeister is the Editor in Chief of the official AAHS journal HAND. He is the past President of the American Society of Reconstructive Microsurgery, American Association for Hand Surgery, The Plastic Surgery Foundation (The Research Body of The American Society of Plastic Surgeons), Plastic Surgery Research Council and the Midwest Association of Plastic Surgeons. He is a leader in translational regenerative medicine research and hopes to utilize his wide network of clinical thought leaders and practical viewpoint on the application of the PolarityTE platform technology to make it a clinical reality."
    },
    {
      fullName: "Stephen Milner, MD, DDS, DSc, FRCSE, FACS",
      firstName: 'Stephen',
      headshot: './assets/management-assets/02_managementTeam/images/stephen-bw.jpg',
      position: 'Chief Clinical Officer ',
      miniBio: 'Dr. Stephen Milner MB.BS, BDS, DSc, FRCS(Ed), FACS is the former Director of the Johns Hopkins Burn Center, Professor of Plastic and Reconstructive Surgery.',
      longBio: 'Dr. Stephen Milner MB.BS, BDS, DSc, FRCS(Ed), FACS is the former Director of the Johns Hopkins Burn Center, Professor of Plastic and Reconstructive Surgery, Pediatrics at Johns Hopkins University School of Medicine and Professor at the Johns Hopkins Bloomberg School of Public Health. He also served as Director of the Michael D Hendrix Burn Research Center, Adjunct Professor Uniformed Services University of the Health Sciences and as an Honorary Civilian Consultant Advisor to the British Army in Plastic Surgery and Burns. Dr. Milner is a graduate of Guys Hospital Medical and Dental Schools. He trained in general surgery in London and at the Massachusetts General Hospital. After service as lieutenant colonel in the Royal Army Medical Corps, where he served on active duty in Operation Desert Storm, he completed a plastic surgery residency at the University of Texas and the Shriners Burn Institute in Galveston. In 2010, he was awarded an Honorary Doctorate of Science from the University of Glamorgan, UK in recognition for his work in burns. In 2012, he was awarded a Humanitarian Award from the James R. Jordan Foundation, and in 2013, was given the Sushruta-Guha Lectureship and medal in Plastic Surgery and Wound Healing from the Royal College of Surgeons of Edinburgh. Dr. Milner has written more than 120 peer reviewed articles amongst his numerous publications and is founding editor of one of the first open access journals, ePlasty.'
    },
    {
      fullName: "Maurice Nahabedian, MD, FACS",
      firstName: 'Maurice',
      headshot: './assets/management-assets/02_managementTeam/images/maurice-bw.jpg',
      position: 'Chief Surgical Officer',
      miniBio: 'Dr. Maurice Nahabedian, MD, FACS is an attending plastic surgeon at the National Center for Plastic Surgery in Virginia and former Professor and Section Chief of Plastic Surgery.',
      longBio: 'Dr. Maurice Nahabedian, MD, FACS is an attending plastic surgeon at the National Center for Plastic Surgery in Virginia and former Professor and Section Chief of Plastic Surgery at the MedStar Washington Hospital Center and the Vice Chairman of the Department of Plastic Surgery at the Georgetown University Hospital in Washington, DC. He completed his Plastic Surgery residency at the Johns Hopkins Hospital in 1995 and was on the plastic surgery faculty at Johns Hopkins from 1995-2005 before joining the faculty at Georgetown University in 2005. His clinical interests include all aspects of breast surgery and abdominal wall reconstruction. Dr. Nahabedian has been the chairman of 19 medical conferences throughout the United States that include the Santa Fe Breast and Body Contouring Symposium, Aesthetica, Dueling Perspectives in Aesthetic Surgery Symposium, Complications in Plastic Surgery Symposium, Breast Cancer Comprehensive Conference (BC3) and the Abdominal Wall Reconstruction Symposium. He is the current Vice Chairman of the annual meeting program and instructional course committee for the American Society of Plastic Surgeons and will be the Chairman for the 2018 meeting. Dr. Nahabedian has given more than 1,000 lectures on topics related to breast surgery and abdominal wall reconstruction at various local, national and international conferences. He has been a visiting professor at 86 hospitals and universities since 2004. Dr. Nahabedian has published more than 200 scientific manuscripts, editorials and discussions, as well as 64 book chapters. He has edited 7 textbooks on breast surgery and abdominal wall reconstruction. Dr. Nahabedian has been the Breast Section Editor for the Journal of Plastic and Reconstructive Surgery since 2009 and is on the editorial board of 4 other surgery journals. Dr. Nahabedian is certified by the American Board of Plastic Surgery and is a member of the American Society of Plastic Surgeons, American Society for Aesthetic Plastic Surgery, American College of Surgeons, American Association of Plastic Surgeons and the American Society for Reconstructive Microsurgery.'
    },
    {
      fullName: "Caroline Garrett, DVM, DACLAM",
      firstName: 'Caroline',
      headshot: './assets/management-assets/02_managementTeam/images/caroline-bw.jpg',
      position: 'Chief Veterinary Officer',
      miniBio: 'Former Director of Large Animal Clinical Medicine and Surgery at Johns Hopkins University. BS Biochemistry - Virginia Tech; DVM - Ohio State University.',
      longBio:'Former Director of Large Animal Clinical Medicine and Surgery at Johns Hopkins University. BS Biochemistry - Virginia Tech; DVM - Ohio State University.'
    },
    {
      fullName: "Matt Kemp",
      firstName: 'Matt',
      headshot: './assets/management-assets/02_managementTeam/images/mkemp-bw.jpg',
      position: 'Chief Commercial Officer',
      miniBio: 'A highly experienced senior healthcare executive, Mr. Kemp has nearly 20 years of leadership experience across multiple therapeutic areas in the medical device, pharmaceutical and biotech industries.',
      longBio: 'A highly experienced senior healthcare executive, Mr. Kemp has nearly 20 years of leadership experience across multiple therapeutic areas in the medical device, pharmaceutical and biotech industries. He has a proven track record of leading successful businesses in complex, competitive and turn-around environments. Prior to joining PolarityTE, Mr. Kemp served as Chief Commercial Officer at Dendreon Pharmaceuticals LLC, a pioneer in personalized medicine. Prior to Dendreon, Mr. Kemp held commercial leadership positions at Zimmer Biomet, Allergan and AbbVie. Mr. Kemp also served six years in the Air Force, rising to the rank of Captain. Mr. Kemp earned his B.S. degree from Purdue University.'
    },
    {
      fullName: "Jennifer Burdman, Esq.",
      firstName: 'Jennifer',
      headshot: './assets/management-assets/02_managementTeam/images/jennifer-bw.jpg',
      position: 'Chief Intellectual Property Officer & Deputy General Counsel ',
      miniBio: 'Jennifer Burdman is an intellectual property attorney specializing in IP procurement, protection, and enforcement. ',
      longBio: 'Jennifer Burdman is an intellectual property attorney specializing in IP procurement, protection, and enforcement. Prior to joining PolarityTE, Ms. Burdman was a partner at King & Spalding LLP with a focus on IP litigation and business-related IP strategies. Ms. Burdman has developed IP strategies and advised on their implementation in the business setting, including licensing deals and other strategic collaborations. Further, as an experienced trial lawyer, she has successfully represented clients at the trial and appellate levels in complex, high-stakes litigations in patent infringement, trade secret misappropriation, and contractual matters involving IP rights. In 2016, Ms. Burdman was profiled as a “Law360 Rising Star” and named to their 2016 Intellectual Property Editorial Advisory Board.  She was also named to Benchmark Litigation’s inaugural Under 40 Hot List in 2016, and again in 2017. The National Law Journal named her a 2015 “Rising Star" in Washington, D.C. Ms. Burdman’s thought leadership in the intellectual property field has also been featured in the Bloomberg BNA Daily Report for Executives and the Intellectual Property & Technology Law Journal, among others. Noteworthy cases include a jury verdict of patent infringement related to the preservation of soft tissue grafts resulting in over $34 million in damages, a jury verdict of willful misappropriation of trade secrets relating to Kevlar with damages of over $900 million, and the successful defense of The Regents of the University of California against a patent licensee seeking expanded rights relating to its sponsored research and license agreements relating to compounds for the treatment of prostate cancer. Ms. Burdman graduated from Dartmouth College with an AB in biochemistry and molecular biology and received a JD from Fordham University School of Law.'
    },

    {
      fullName: "Mark Lehman, JD",
      firstName: 'Lehman',
      headshot: './assets/management-assets/02_managementTeam/images/lehman-bw.jpg',
      position: 'Chief Legal Officer',
      miniBio: 'Before joining PolarityTE, Mr. Lehman was a shareholder in the law firm of Parsons Behle & Latimer',
      longBio: 'Before joining PolarityTE, Mr. Lehman was a shareholder in the law firm of Parsons Behle & Latimer.  Mr. Lehman has 30 years’ experience as a lawyer practicing in the areas of corporate finance, SEC compliance, and mergers and acquisitions.  He has been recognized in Best Lawyers in America, Securities/Capital Markets Law.  In 2018 he completed a three-year term on the Global Board of Directors of the Association for Corporate Growth, an international association with 14,500 members consisting of investors, executives, lenders and advisers focused on growing middle-market companies.  Mr. Lehman earned his Juris Doctoris from Washington University in St. Louis and his Bachelor of Science degree from the University of Utah.'
    },
    {
      fullName: "Holly Kramen, Esq.",
      firstName: 'Holly',
      headshot: './assets/management-assets/02_managementTeam/images/holly-bw.jpg',
      position: 'Chief Compliance Officer & Privacy Officer ',
      miniBio: 'Holly Kramen is a seasoned compliance professional with a wealth of experience building and tailoring Legal and Compliance programs in companies of all sizes and unique needs',
      longBio: 'Holly Kramen is a seasoned compliance professional with a wealth of experience building and tailoring Legal and Compliance programs in companies of all sizes and unique needs. She has designed, led and implemented processes, policies, systems, training, auditing and monitoring for every aspect of corporate, commercial and medical affairs compliance. She has also built and performed legal counsel functions handling all aspects of life science contracting and commercialization, as well as handling privacy functions. Immediately prior to joining PolarityTE, Ms. Kramen spent two years leading the global compliance and privacy functions at Circassia Pharmaceuticals. In 2015, prior to Circassia Pharmaceuticals, she spent a year as a Principal at the law firm of Porzio Bromberg & Newman and concurrently Vice President at Porzio Life Sciences where she advised companies on compliance and commercial legal issues. From 2010 to 2014, Ms. Kramen was General Counsel for Americas and led the US compliance program, as well as the North and South America legal functions at Given Imaging (now Medtronic). Her other previous roles include Senior Director at Gilead Sciences leading US and international compliance and key roles in commercial operations at Pfizer, Inc., where she created and co-authored the first pharmaceutical compliance manual and built the first US aggregate spend system. Additionally, Ms. Kramen has counseled numerous companies on compliance through her position as Director at PricewaterhouseCoopers LLP. Ms. Kramen received her Bachelor of Arts degree from Barnard College, and her Juris Doctor degree from Quinnipiac University.'
    },
    {
      fullName: "David Blum, MA, PhD",
      firstName: 'DavidBlum',
      headshot: './assets/management-assets/02_managementTeam/images/davidBlum-bw.jpg',
      position: 'Chief Design & Technology Officer',
      miniBio: 'Before joining PolarityTE, David Blum served as Senior Medical Illustration Editor at Healthwise, Inc., overseeing production of medical illustration and animation assets to be used for print',
      longBio: 'Before joining PolarityTE, David Blum served as Senior Medical Illustration Editor at Healthwise, Inc., overseeing production of medical illustration and animation assets to be used for print, digital, and video products for patient education. Dr. Blum has 20 years’ experience as a medical illustrator and animator practicing in the areas of education, marketing, advertising, biomedical visualization and technology. Dr. Blum earned his doctorate in Biological Chemistry and Master of Arts in Medical and Biological Illustration from The Johns Hopkins University School of Medicine in Baltimore and his Bachelor of Arts degrees in Studio Art and Biological/Pre-Medical Illustration from Saint John’s University and Iowa State University, respectively. At PolarityTE, Inc., David is the Chief Design & Technology Officer, leading four departments that provide enterprise-wide technical, visual and design support.'
    },

  ];

  cba_team: team_interface[] = [
    {
      fullName: "Wayne J. Saunders, DMD",
      firstName: 'Wayne',
      headshot: './assets/clinical-assets/wayne.jpg',
      position: '',
      miniBio: 'Dr. Wayne J. Saunders is the Chief of Oral and Maxillofacial Surgery and Dentistry at St. Luke’s University Hospital where he oversees a multidisciplinary team of healthcare professionals',
      longBio: "Dr. Wayne J. Saunders is the Chief of Oral and Maxillofacial Surgery and Dentistry at St. Luke’s University Hospital where he oversees a multidisciplinary team of healthcare professionals, including the largest oral surgery practice in the Lehigh Valley, Pennsylvania. Previously, Dr. Saunders served as chief resident of Oral and Maxillofacial Surgery at The Albert Einstein College of Medicine-Montefiore Medical Center in New York. Dr. Saunders is board certified in Oral and Maxillofacial Surgery, as well as Dental Anesthesiology. Dr. Saunders earned his Doctorate of Dental Medicine from Temple University School of Dentistry in Philadelphia, and his Bachelor of Arts Degree from Tulane University. Dr. Saunders is a well-respected expert in his field and has held leadership roles at several professional societies, including the American Association of Oral and Maxillofacial Surgeons, the American Board of Oral and Maxillofacial Surgery and the American College of Oral and Maxillofacial Surgeons."

    },
    {
      fullName: "Michael P. Grant, MD, PhD, FACS",
      firstName: 'michaelP',
      headshot: './assets/clinical-assets/michael.jpg',
      position: '',
      miniBio: 'Dr. Michael P. Grant is the Paul N. Manson Distinguished Professor of Plastic and Reconstructive Surgery at the R Adams Cowley Shock Trauma Center',
      longBio: "Dr. Michael P. Grant is the Paul N. Manson Distinguished Professor of Plastic and Reconstructive Surgery at the R Adams Cowley Shock Trauma Center, University of Maryland Medical Center and Professor of Surgery, Program in Trauma at the University of Maryland School of Medicine. As one of the few dual-trained plastic surgeons and ophthalmologists in the country, Dr. Grant specializes in complex craniomaxillofacial reconstruction of the facial skeleton and soft tissue of the periorbital region. This includes eyelid reconstruction, reconstruction of the internal orbit, and lacrimal system following trauma, removal of tumors, and congenital malformations. Dr. Grant is an internationally recognized expert in the fields of primary and secondary orbital reconstruction, computer assisted surgery and facial aesthetic surgery. Further, Dr. Grant’s research interests include applying innovative solutions to difficult clinical problems.  He is actively engaged in the development of biomaterials for conjunctival reconstruction, utilizing progenitor cells for regeneration of bone in the craniofacial skeleton, and the use of computer-aided design for more predictable surgery. He was selected as a trainee in the Medical Scientist Training Program at Case Western Reserve University, receiving a MD, and PhD in neurosciences. He completed the Ophthalmology residency at the Wilmer Eye Institute, Johns Hopkins Hospital, followed by a General Plastic Surgery residency in the Johns Hopkins/University of Maryland Training Program. He is a member of the American Society of Plastic Surgery, American Society of Maxillofacial Surgeons, American Society of Oculoplastic and Reconstructive Surgery, American Academy of Ophthalmology and a fellow of the American College of Surgeons."
    },
    {
      fullName: "Anand R. Kumar, MD, FACS, FAAP",
      firstName: 'Anand',
      headshot: './assets/clinical-assets/Anand.jpg',
      position: '',
      miniBio: 'Dr. Anand R. Kumar is a Professor in the Departments of Plastic Surgery and Pediatrics at the Case Western Reserve University School of Medicine. As a pediatric plastic/craniofacial surgeon and basic science researcher.',
      longBio: "Dr. Anand R. Kumar is a Professor in the Departments of Plastic Surgery and Pediatrics at the Case Western Reserve University School of Medicine. As a pediatric plastic/craniofacial surgeon and basic science researcher, he conducts investigation into the cellular biology of muscle derived progenitor cells as a source of pathologic heterotopic ossification and for novel regenerative medicine applications. His clinical practice focuses on cleft and craniofacial surgery. Dr. Kumar as authored more than 50 original scientific publications in peer-reviewed journals and contributed to multiple plastic and orthopedic surgery textbooks throughout the last 10 years. Dr. Kumar received his medical degree from the Albert Einstein College of Medicine. He completed his general surgery residency at the Mayo Clinic Rochester and later completed a second residency in plastic and reconstructive surgery at the University of California, Los Angeles (UCLA). He subsequently completed a pediatric plastic/craniofacial surgery fellowship after his residency at UCLA. In 2004, prior to his academic appointment, Dr. Kumar volunteered for military service and joined the United States Navy until 2010. In Bethesda, MD, he served as director and staff pediatric plastic surgeon of the Military Craniofacial Unit at Walter Reed National Military Medical Center. He served as division chief in plastic and reconstructive surgery at the National Naval Medical Center in Bethesda and on board the United States Naval Support Hospital Ship Comfort. In 2010, Dr. Kumar was recruited to the University of Pittsburgh and the Johns Hopkins Hospital prior to his appointment as Division Chief of Pediatric Plastic Surgery at Rainbow Babies Children’s Hospital of Case Western University. He currently serves as Vice President of Communications on the board of the American Society of Maxillofacial Surgeons (ASMS)."
    },
    {
      fullName: "Martin C. Robson, MD, FACS, Hon. FRCS, Hon. FRACS",
      firstName: 'michael',
      headshot: './assets/clinical-assets/Martin.jpg',
      position: '',
      miniBio: 'Emeritus Professor at the University of South Florida, Dr. Robson previously served as President of the American Burn Association, where he received its Distinguished Service Award, and as President of the Wound Healing Society.',
      longBio: "Emeritus Professor at the University of South Florida, Dr. Robson previously served as President of the American Burn Association, where he received its Distinguished Service Award, and as President of the Wound Healing Society. Dr. Robson also has been Chairman of the American Board of Plastic Surgery, Chairman of the Residency Review Committee for Plastic Surgery, Chairman of the Plastic Surgery Research Council and President of the Association of Academic Chairmen of Plastic Surgery. Dr. Robson received his Doctorate of Medicine from the Johns Hopkins University and completed his general surgery residency at the Brooke Army Medical Center, and his plastic surgery residency at Yale. He has served as Chief of Plastic Surgery at the University of Chicago, Wayne State University, and the University of Texas Medical Branch. He is a Fellow of the American College of Surgeons and holds Honorary Fellowships from the Royal College of Surgeons of England and the Royal Australasian College of Surgeons. He is a recipient of the Lifetime Scientific Achievement Awards from the Wound Healing Society, the Association of Advanced Wound Care and the World Union of Wound Healing Societies. He has authored over 650 publications mostly devoted to wound healing, wound infection, burns and proliferative scarring. Dr. Robson has made numerous contributions to the growth of importance for wound and skin injuries, and he 'hopes to inspire today's generation to revolutionize the treatment, care and methods behind skin-related injuries through the scientific pioneers that exist today."
    },
    {
      fullName: "William L. Hickerson, MD, FACS",
      firstName: 'William',
      headshot: './assets/clinical-assets/william.jpg',
      position: '',
      miniBio: 'Dr. William L. Hickerson is currently the Chief of Burn Surgery and the Professor of Plastic Surgery at the University of Tennessee-Health Science Center College (UTHSC).',
      longBio: "Dr. William L. Hickerson is currently the Chief of Burn Surgery and the Professor of Plastic Surgery at the University of Tennessee-Health Science Center College (UTHSC). He is also the Medical Director of the Firefighters' Burn Center in Memphis, TN, which is the region's only comprehensive burn care unit. At UTHSC, Dr. Hickerson earned his Doctorate of Medicine, served as chief resident of general surgery and completed his plastic surgery residency. Dr. Hickerson is certified by the American Boards of General Surgery and Plastic Surgery. Dr. Hickerson has authored and co-authored over 40 medical articles about trauma, plastic surgery, skincare and wound cares. He is a well-respected expert in the field of burn surgery and has professional memberships with the American Burn Association, the American Association of Plastic Surgeons and the Association of Academic Chairmen of Plastic Surgery."
    },
    {
      fullName: "Jeffrey W. Shupp, MD",
      firstName: 'Jeffrey',
      headshot: './assets/clinical-assets/jeffrey.jpg',
      position: '',
      miniBio: "At MedStar Washington Hospital Center, Dr. Jeffrey W. Shupp is the lead investigator of the Firefighters' Burn and Surgical Research Laboratory as well as the Director of the Burn Center. '",
      longBio: "At MedStar Washington Hospital Center, Dr. Jeffrey W. Shupp is the lead investigator of the Firefighters' Burn and Surgical Research Laboratory as well as the Director of the Burn Center. Dr. Shupp also directs the department of Burn Research at MedStar Health Research Institute. Outside of his leadership roles, Dr. Shupp is an Associate Professor of Surgery at the Uniformed Services University of the Health Sciences in Washington, D.C. and an Associate Professor of Biomedical Engineering at The Catholic University of America, also in Washington, D.C. After earning his Doctorate of Medicine from the Virginia Commonwealth University School of Medicine, Dr. Shupp joined MedStar Washington Hospital Center to complete his residency in general surgery and his three-year fellowship in burn surgery. Dr. Shupp has done extensive research in a wide range of topics such as: burn surgery, thermal injury, burn injury and molecular pathology. His research has resulted in over 65 peer-reviewed publications. Dr. Shupp is highly recognized for his help in developing and designing MedStar Washington Hospital Center's Burn and Surgical research program, a nationally renowned institution that encompasses all aspects of burn research: multi-center clinical trials, pre-clinical, translational, and basic science research."
    },
    {
      fullName: "Mark S. Granick, MD",
      firstName: 'Mark',
      headshot: './assets/clinical-assets/mark.jpg',
      position: '',
      miniBio: "Dr. Mark Granick is currently the Professor and the Chief of Plastic Surgery at Rutgers New Jersey Medical School. Dr. Granick is affiliated with St. Barnabas Medical Center.",
      longBio: "Dr. Mark Granick is currently the Professor and the Chief of Plastic Surgery at Rutgers New Jersey Medical School. Dr. Granick is affiliated with St. Barnabas Medical Center, Newark Beth Israel Medical Center and University Newark Hospital, all of which are in New Jersey. Dr. Granick has over 40 years of experience in plastic surgery, and he specializes in complex reconstructive surgery and surgical wound care. Dr. Granick received his B.A. from Cornell University and his Doctorate of Medicine from Harvard Medical School. He completed his residency and fellowship at Harvard Medical School and the University of Pittsburgh, respectively. Dr. Granick is certified by the American Boards of Plastic Surgery and of Otolaryngology, Head and Neck Surgery. Dr. Granick has edited nine textbooks, written 50 book chapters and authored 150 peer-reviewed scholarly publications. As demonstrated by his lifetime appointment to Strathmore's Who's Who and Castle Connelly's mention of Dr. Granick in Top Doctors in the New York Metropolitan Area for the last nine consecutive years, Dr. Granick is internationally and nationally recognized as a top plastic surgeon."
    },
    {
      fullName: "David J. Smith, Jr., MD",
      firstName: 'david',
      headshot: './assets/clinical-assets/David.jpg',
      position: '',
      miniBio: "Dr. David J. Smith, Jr. is currently the Richard G. Connar Professor and Chairman of the Department of Surgery at the University of South Florida, and serves as the Chief Medical Officer for the Center for Advanced Medical Learning and Simulation.",
      longBio: "Dr. David J. Smith, Jr. is currently the Richard G. Connar Professor and Chairman of the Department of Surgery at the University of South Florida, and serves as the Chief Medical Officer for the Center for Advanced Medical Learning and Simulation. Dr. Smith previously enjoyed a long career at the University of Michigan where, among other roles, he was a Professor of Surgery and Section Head for Plastic and Reconstructive Surgery, and Associate Chairman for the Department of Surgery. Dr. Smith received his B.A. from Wesleyan University, and his Doctorate of Medicine from the Indiana University School of Medicine. He completed his residency in plastic surgery at the University of Indiana Medical Center, and completed a fellowship in hand surgery at the Christine M. Kleinert Institute for Hand and Microsurgery in Louisville, KY. Among his many appointments and memberships, Dr. Smith is the past President of the American Association for Hand Surgery, the past Chairman of the American Board of Plastic Surgery, and past President of the Association of Academic Chairmen of Plastic Surgery. He has authored more than 140 peer-reviewed publications in prominent medical journals, in addition to more than 40 book chapters. He has served on numerous editorial boards for peer-reviewed medical journals, including Surgery, Plastic and Reconstructive Surgery, Annals of Plastic Surgery, and the Journal of Surgical Research."
    },
    {
      fullName: "Gerhard S. Mundinger, MD",
      firstName: 'Gerhard',
      headshot: './assets/clinical-assets/gerhard.jpg',
      position: '',
      miniBio: "Dr. Gerhard S. Mundinger is the Director of Plastic Surgery at the Children's Hospital of New Orleans, and an Assistant Professor of Clinical Surgery and Assistant Professor of Cell Biology and Anatomy at Louisiana State University Health Sciences Center in New Orleans.",
      longBio: "Dr. Gerhard S. Mundinger is the Director of Plastic Surgery at the Children's Hospital of New Orleans, and an Assistant Professor of Clinical Surgery and Assistant Professor of Cell Biology and Anatomy at Louisiana State University Health Sciences Center in New Orleans. From 2014 to 2015, he served as Administrative Chief of Service for the Johns Hopkins Department of Plastic Surgery. Dr. Mundinger received his BA from the University of Michigan and his medical degree from Johns Hopkins University, where he also completed his residency in plastic and reconstructive surgery. Dr. Mundinger then completed a fellowship in pediatric and adult craniofacial surgery at Seattle Children's Hospital. He has received numerous awards, including the Johns Hopkins Frank L. Coulson Award for Clinical Excellence. Dr. Mundinger has authored more than 60 peer-reviewed original publications in prominent medical journals, including the New England Journal of Medicine. He is a nationally and internationally respected expert in his field, as evidenced by invitations he has received to speak at worldwide conferences on reconstructive microsurgery, surgical education, craniofacial surgery, aesthetic surgery and vascularized composite tissue (face and hand) transplantation."
    },
    {
      fullName: "Trinity J. Bivalacqua, MD, PhD",
      firstName: 'Trinity',
      headshot: './assets/clinical-assets/trinity.jpg',
      position: '',
      miniBio: "Trinity J. Bivalacqua, MD, PhD, is the R. Christian B. Evensen Professor of Urology and Oncology and Director of Urologic Oncology at the James Buchanan Brady Urologic Institute at The Johns Hopkins University School of Medicine.",
      longBio: " He was born in New Orleans, Louisiana and graduated from Tulane University with undergraduate, graduate and medical degrees. He joined the faculty after completing his General Surgery and Urology training at Johns Hopkins Hospital. He also completed an American Urological Association (AUA) Foundation Post-Doctoral Fellowship from the AUA Care Foundation. Dr. Bivalacqua has an active clinical practice in Urologic Oncology and Sexual Dysfunction. As a member of the Sidney Kimmel Comprehensive Cancer Center at Johns Hopkins, Dr.   Bivalacqua participates in multidisciplinary approaches to the treatment of a variety of genitourinary cancers. He has a special interest in cancers of the prostate and bladder with an emphasis on organ sparing therapies, minimally invasive techniques, and orthotopic bladder substitution (neobladder). Although he has a busy surgical practice, he maintains an active research portfolio in order to improve outcomes of cancer patients. A major focus of his research lab is development of pre-clinical models of urothelial carcinoma to test systemic and intravesical immunotherapies and nano-particular based chemotherapies. Also, he heads the tissue-engineering lab which focuses on regenerative approaches to enhance autonomic nerve function and development of tissue-engineered urinary tissue with the ultimate goal of production of a neo-urinary conduit and bladder."
    },
    {
      fullName: "Shannath L. Merbs, MD, PhD, FACS",
      firstName: 'Shannath',
      headshot: './assets/clinical-assets/shannath.jpg',
      position: '',
      miniBio: "Dr. Shannath L. Merbs is a Professor of Ophthalmology at Johns Hopkins School. She has focused her practice on treatment of disease of the tissues surrounding the eyes, eyelids and eye sockets.",
      longBio: "Dr. Shannath L. Merbs is a Professor of Ophthalmology at Johns Hopkins School. She has focused her practice on treatment of disease of the tissues surrounding the eyes, eyelids and eye sockets. Further, Dr. Merbs also leads an active research program in the field of ocular epigenetics and its contribution to retinal development and disease. She received her medical degree and PhD in Molecular Biology, and subsequently her residency in ophthalmology, from Johns Hopkins. She also completed a fellowship in oculoplastic surgery at the Wilmer Eye Institute. She has been a member of the Wilmer faculty since 1997. Further, Dr. Merbs has received various honors including The Niuta and Roy Titus Faculty Development Award at Wilmer Eye Institute and has held various professional memberships including the American Academy of Ophthalmology. "
    },
    {
      fullName: "Ryan Katz, MD, FACS",
      firstName: 'Ryan',
      headshot: './assets/clinical-assets/Ryan.jpg',
      position: '',
      miniBio: "Dr. Ryan Katz currently practices as an orthopaedic surgeon, board-certified in Plastic and Reconstructive Surgery and fellowship trained in hand surgery at Medstar Union Memorial Hospital in Baltimore, MD.",
      longBio: "Dr. Ryan Katz currently practices as an orthopedic surgeon, board-certified in Plastic and Reconstructive Surgery and fellowship trained in hand surgery at Medstar Union Memorial Hospital in Baltimore, MD. He specializes in microsurgery, reconstructive surgery, tissue transfer, orthopedic trauma of the upper extremity, and surgery of the peripheral nerve. Dr. Katz was named a Baltimore magazine Top Doctor in 2013. He graduated cum laude from Duke University as an undergraduate, with a BS in biology and a BA in economics, before attending the University of Maryland Medical School, where he received his medical degree. He completed his plastic surgery residency at Johns Hopkins and his hand surgery fellowship at the Curtis National Hand Center at MedStar Union Memorial Hospital. Dr. Katz searches for innovative solutions to complex surgical problems and is committed to teaching as demonstrated through his involvement in the microsurgical training program, guiding fellows and residents through dissection, laboratory sessions and lecture."
    },
    {
      fullName: "Stephen Milner, MD, DDS, DSc, FRCSE, FACS",
      firstName: 'StephenM',
      headshot: './assets/management-assets/02_managementTeam/images/stephen-bw.jpg',
      position: '',
      miniBio: "Dr. Stephen Milner MB.BS, BDS, DSc, FRCS(Ed), FACS is the former Director of the Johns Hopkins Burn Center, Professor of Plastic and Reconstructive Surgery",
      longBio: "Dr. Stephen Milner MB.BS, BDS, DSc, FRCS(Ed), FACS is the former Director of the Johns Hopkins Burn Center, Professor of Plastic and Reconstructive Surgery, Pediatrics at Johns Hopkins University School of Medicine and Professor at the Johns Hopkins Bloomberg School of Public Health. He also served as Director of the Michael D Hendrix Burn Research Center, Adjunct Professor Uniformed Services University of the Health Sciences and as an Honorary Civilian Consultant Advisor to the British Army in Plastic Surgery and Burns. Dr. Milner is a graduate of Guys Hospital Medical and Dental Schools. He trained in general surgery in London and at the Massachusetts General Hospital. After service as lieutenant colonel in the Royal Army Medical Corps, where he served on active duty in Operation Desert Storm, he completed a plastic surgery residency at the University of Texas and the Shriners Burn Institute in Galveston. In 2010, he was awarded an Honorary Doctorate of Science from the University of Glamorgan, UK in recognition for his work in burns. In 2012, he was awarded a Humanitarian Award from the James R. Jordan Foundation, and in 2013, was given the Sushruta-Guha Lectureship and medal in Plastic Surgery and Wound Healing from the Royal College of Surgeons of Edinburgh. Dr. Milner has written more than 120 peer reviewed articles amongst his numerous publications and is founding editor of one of the first open access journals, ePlasty."
    },
    {
      fullName: "Michael W. Neumeister, MD, FRCSC, FACS",
      firstName: 'MichaelW',
      headshot: './assets/management-assets/02_managementTeam/images/michael-bw.jpg',
      position: '',
      miniBio: "Dr. Michael W. Neumeister is Professor and Chairman of the Department of Surgery and The Elvin G. Zook Endowed Chair in Plastic Surgery at Southern Illinois University School of Medicine in Springfield, IL. ",
      longBio: "Dr. Michael W. Neumeister is Professor and Chairman of the Department of Surgery and The Elvin G. Zook Endowed Chair in Plastic Surgery at Southern Illinois University School of Medicine in Springfield, IL. He received his medical degree from the University of Toronto and previously completed a degree in physiology and pharmacology at the University of Western Ontario. Dr. Neumeister began his residency at Dalhousie University in Halifax, Nova Scotia in general surgery and went on to complete his plastic surgery residency at the University of Manitoba. He continued his training as a microsurgery fellow at Harvard University’s Brigham & Women’s Hospital in Boston and completed a hand and microsurgery fellowship at Southern Illinois University School of Medicine. Dr. Neumeister is board certified in plastic surgery by the Royal College of Surgeons of Canada and the American Board of Plastic Surgery. He has also received a Certificate in Surgery of The Hand (SOTH). Dr. Neumeister has received awards for presentations given regionally, nationally and internationally, has more than 150 book chapters and articles, and has multiple research interests in tissue engineering and regenerative medicine. Dr. Neumeister is the Editor in Chief of the official AAHS journal HAND. He is the past President of the American Society of Reconstructive Microsurgery, American Association for Hand Surgery, The Plastic Surgery Foundation (The Research Body of The American Society of Plastic Surgeons), Plastic Surgery Research Council and the Midwest Association of Plastic Surgeons. He is a leader in translational regenerative medicine research and hopes to utilize his wide network of clinical thought leaders and practical viewpoint on the application of the PolarityTE platform technology to make it a clinical reality."
    },
    {
      fullName: "Maurice Nahabedian, MD, FACS",
      firstName: 'MauriceN',
      headshot: './assets/management-assets/02_managementTeam/images/maurice-bw.jpg',
      position: '',
      miniBio: "Dr. Maurice Nahabedian, MD, FACS is an attending plastic surgeon at the National Center for Plastic Surgery in Virginia and former Professor and Section Chief of Plastic Surgery ",
      longBio: "Dr. Maurice Nahabedian, MD, FACS is an attending plastic surgeon at the National Center for Plastic Surgery in Virginia and former Professor and Section Chief of Plastic Surgery at the MedStar Washington Hospital Center and the Vice Chairman of the Department of Plastic Surgery at the Georgetown University Hospital in Washington, DC. He completed his Plastic Surgery residency at the Johns Hopkins Hospital in 1995 and was on the plastic surgery faculty at Johns Hopkins from 1995-2005 before joining the faculty at Georgetown University in 2005. His clinical interests include all aspects of breast surgery and abdominal wall reconstruction. Dr. Nahabedian has been the chairman of 19 medical conferences throughout the United States that include the Santa Fe Breast and Body Contouring Symposium, Aesthetica, Dueling Perspectives in Aesthetic Surgery Symposium, Complications in Plastic Surgery Symposium, Breast Cancer Comprehensive Conference (BC3) and the Abdominal Wall Reconstruction Symposium. He is the current Vice Chairman of the annual meeting program and instructional course committee for the American Society of Plastic Surgeons and will be the Chairman for the 2018 meeting. Dr. Nahabedian has given more than 1,000 lectures on topics related to breast surgery and abdominal wall reconstruction at various local, national and international conferences. He has been a visiting professor at 86 hospitals and universities since 2004. Dr. Nahabedian has published more than 200 scientific manuscripts, editorials and discussions, as well as 64 book chapters. He has edited 7 textbooks on breast surgery and abdominal wall reconstruction. Dr. Nahabedian has been the Breast Section Editor for the Journal of Plastic and Reconstructive Surgery since 2009 and is on the editorial board of 4 other surgery journals. Dr. Nahabedian is certified by the American Board of Plastic Surgery and is a member of the American Society of Plastic Surgeons, American Society for Aesthetic Plastic Surgery, American College of Surgeons, American Association of Plastic Surgeons and the American Society for Reconstructive Microsurgery."
    },
  
    {
      fullName: "Anthony P. Tufaro, MD, DDS, FACS",
      firstName: 'ATufaro',
      headshot: './assets/clinical-assets/tufaro.jpg',
      position: '',
      miniBio: "Dr. Anthony P. Tufaro is a Professor of Surgery and Chief Division of Plastic Surgery at the University of Oklahoma Health Sciences Center. ",
      longBio: "Dr. Anthony P. Tufaro is a Professor of Surgery and Chief Division of Plastic Surgery at the University of Oklahoma Health Sciences Center. He previously served as Associate Professor of Plastic Surgery at Johns Hopkins School of Medicine. His clinical emphases include major reconstruction of the chest and abdominal wall, head and neck surgical oncology, management of soft tissue malignancies, cutaneous oncology including melanoma and craniofacial surgery and reconstruction. Dr. Tufaro received his medical degree from Hahnemann University School of Medicine in Philadelphia, PA and his dental surgery degree from New York University College of Dentistry. He completed his general surgery residency at Johns Hopkins and his oral and maxillofacial surgery at Nassau County Medical Center in New York, followed by a fellowship in head and neck surgical oncology at Memorial Sloan Kettering Cancer Center. He has been published many times in highly respected medical journals including Annals of Plastic Surgery, Plastic and Reconstructive Surgery and Annals of Surgical Oncology."
    },
    {
      fullName: "Michael Callahan, MD, DTM&H, MSPH ",
      firstName: 'Callahan',
      headshot: './assets/clinical-assets/callahan.jpg',
      position: '',
      miniBio: "Dr. Michael Callahan practices as a tropical and disaster medicine physician at Massachusetts General Hospital and Harvard Medical School. He also serves as president of the Division of Cellular Therapeutics at United Therapeutics.",
      longBio: "Dr. Michael Callahan practices as a tropical and disaster medicine physician at Massachusetts General Hospital and Harvard Medical School. He also serves as president of the Division of Cellular Therapeutics at United Therapeutics. Dr. Callahan has worked for many years in disease outbreak response under U.S. Federal Charter Rescue Medicine, Rapid UK, the World Health Organization and prior to 2005, under the UNHCR. His global outbreak response deployments have included Ebola, Marburg, H5N1, SARs, H7N9 and MERS-CoV. He served as a Program Manager for Biodefense and Mass-Casualty Care at the Defense Advanced Research Project Agency (DARPA), where he was awarded the 2008 DARPA Achievement Award for his technologic breakthrough in the rapid, large scale manufacture of emergency vaccines and infectious disease countermeasures. He has a wide range of biodefense experience, advising both senior government officials from the State Department to Department of Defense, as well as academic institutions. Dr. Callahan received his medical degree at the University of Alabama School of Medicine, his MSPH at the University of Alabama School of Public Health, and his DTM&H degree at the London School of Hygiene and Tropical Medicine."
    },
    {
      fullName: "Richard Swanson, MD",
      firstName: 'Richard',
      headshot: './assets/clinical-assets/swanson.jpg',
      position: '',
      miniBio: "Dr. Richard Swanson is Chief of Surgery at Cambridge Health Alliance in Boston and Associate Professor of Surgery at Harvard Medical School. ",
      longBio: "Dr. Richard Swanson is Chief of Surgery at Cambridge Health Alliance in Boston and Associate Professor of Surgery at Harvard Medical School. He previously practiced at the Dana-Farber/Brigham and Women’s Cancer Center, where he was the director of the program in hepatobiliary and pancreatic cancer of the Division of Surgical Oncology, and at UMass Memorial Medical Center as Chief of Surgical Oncology. Dr. Swanson also served as Associate Professor of Surgery at UMass Medical School. Dr. Swanson received his medical degree from Harvard Medical School; he completed his residency at Massachusetts General Hospital and a surgical oncology fellowship at the University of Texas MD Anderson Cancer Center. "
    },
  ]


  getEmployees():Observable<team_interface[]> {
    return of(this.bod_team);
  }
  getManagement():Observable<team_interface[]>{
    return of(this.mgmnt_team);
  }
  
  getClinicalBoard():Observable<team_interface[]>{
    return of(this.cba_team);
  }


  }


