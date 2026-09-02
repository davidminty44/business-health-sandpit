const sidebar=document.querySelector('#sidebar');
const menuButton=document.querySelector('#menuButton');
const navScrim=document.querySelector('#navScrim');
const mobileMedia=window.matchMedia('(max-width:800px)');
const appShell=document.querySelector('#appShell');
const mainContent=document.querySelector('main');
const productFooter=document.querySelector('#productFooter');
const scheduleModal=document.querySelector('#scheduleModal');
const emailPreviewModal=document.querySelector('#emailPreviewModal');
const modalBackdrop=document.querySelector('#modalBackdrop');
const emailPreviewButton=document.querySelector('#emailPreviewButton');
const emailPreviewShortcut=document.querySelector('#emailPreviewShortcut');
const modalClose=document.querySelector('#modalClose');
const emailPreviewClose=document.querySelector('#emailPreviewClose');
const closeEmailPreview=document.querySelector('#closeEmailPreview');
const cancelSchedule=document.querySelector('#cancelSchedule');
const scheduleForm=document.querySelector('#scheduleForm');
const stopSchedule=document.querySelector('#stopSchedule');
const toast=document.querySelector('#toast');
const toastMessage=document.querySelector('#toastMessage');
const appliedPeriod=document.querySelector('#appliedPeriod');
const recipientField=document.querySelector('#recipientField');
const recipientError=document.querySelector('#recipientError');
const calculationToggle=document.querySelector('#calculationToggle');
const calculationAnnouncement=document.querySelector('#calculationAnnouncement');
const calculationTriggers=Array.from(document.querySelectorAll('.calc-trigger'));
const calculationMedia=window.matchMedia('(max-width:800px)');
const calculationStorageKey='tradify.reports.businessHealth.showCalculations';
const calculationKeyStorageKey='tradify.reports.businessHealth.calculationKeySeen';
const demandFlows=Array.from(document.querySelectorAll('[data-demand-flow]'));
const healthViewTabs=Array.from(document.querySelectorAll('.health-view-tab[role="tab"]'));
const healthViewPanels=Array.from(document.querySelectorAll('.health-view-panel'));
const aiAnalysisTrigger=document.querySelector('#aiAnalysisTrigger');
const aiInlineAnalysis=document.querySelector('#aiInlineAnalysis');
const aiAskToggle=document.querySelector('#aiAskToggle');
const aiAskPanel=document.querySelector('#aiAskPanel');
const aiQuestionForm=document.querySelector('#aiQuestionForm');
const aiQuestionInput=document.querySelector('#aiQuestionInput');
const aiAnswer=document.querySelector('#aiAnswer');
const aiAnswerQuestion=document.querySelector('#aiAnswerQuestion');
const aiAnswerText=document.querySelector('#aiAnswerText');
const aiAnswerSource=document.querySelector('#aiAnswerSource');
const aiAnswerSourceAction=document.querySelector('#aiAnswerSourceAction');
const aiPriorityLinks=Array.from(document.querySelectorAll('.ai-priority-link'));
const calculationMetadata={
  'money-in':{
    title:'Money in calculation',category:'Tradify data',categoryType:'tradify',icon:'fa-database',
    definition:'Payments recorded against customer invoices in the selected period.',
    calculation:'August money in: $7,400 + $6,200 + $5,800 + $5,200 = $24,600, grouped by payment date. July money in: $33,000. Change: $24,600 − $33,000 = -$8,400, shown as down $8,400 from last month.',
    source:'Invoice payments recorded in Tradify.',
    note:'Includes payments added when invoices are marked as paid. It is not matched to a bank statement and excludes credit notes.'
  },
  'money-out':{
    title:'Money out calculation',category:'Accounting data required',categoryType:'accounting',icon:'fa-share-alt',
    definition:'Payments to suppliers, payroll, expenses and fees that settled in the selected period.',
    calculation:'August money out: $6,900 + $8,200 + $7,600 + $9,200 = $31,900. July money out: $27,600. Change: $31,900 − $27,600 = +$4,300, shown as up $4,300 from last month.',
    source:'Not available from Tradify today. This needs a new import of settled transactions from accounting or bank data.',
    note:'Supplier bills in Tradify are only Draft or Approved; they do not record amount paid or payment date.'
  },
  'net-cash':{
    title:'Net cash calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Money left after money out is taken from money in.',
    calculation:'$24,600 − $31,900 = -$7,300.',
    source:'Combines Tradify invoice payments with connected accounting or bank outgoings.',
    note:'Net cash cannot be produced from Tradify alone until money-out data is available.'
  },
  'weekly-flow':{
    title:'Weekly actuals calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Money in and money out grouped into the four weeks in the selected period.',
    calculation:'Money in by week: $7,400, $6,200, $5,800 and $5,200. Money out: $6,900, $8,200, $7,600 and $9,200. Weekly net: +$500, -$2,000, -$1,800 and -$4,000. Total: -$7,300.',
    source:'Payment date for customer receipts; settlement date for accounting or bank outgoings.',
    note:'The money-out side needs new accounting or bank transaction ingestion.'
  },
  profitability:{
    title:'Profitability calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Profit made from selected jobs after recorded labour, material and other job costs.',
    calculation:'Revenue $42,800 − job costs $34,700 = gross profit $8,100. $8,100 ÷ $42,800 = 18.9%, shown as 19%. Previous margin: 26%. Change: -7 points.',
    source:'Same basis as the Job Financial Report: tax-exclusive lines from non-cancelled invoices, timesheet or scheduled labour cost, job products and miscellaneous costs.',
    note:'The period selects jobs, not transactions. All recorded costs and non-cancelled invoice lines for each selected job are included, regardless of their dates. Multi-job invoices can be counted against more than one job.'
  },
  'overdue-invoices':{
    title:'Invoices to chase calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Outstanding customer invoice balances whose due date is before the report date.',
    calculation:'Outstanding balance = invoice total − applied credits − recorded payments. Total: $12,400 + $6,280 + $8,950 + $5,950 + $5,140 + $4,600 + $3,850 + $650 = $47,820 across 8 invoices. The 3 oldest invoices shown total $27,630; the other 5 total $20,190. Days overdue = report date − invoice due date.',
    source:'Tradify customer invoices: customer total, due date, status, applied credits and recorded payments.',
    note:'Draft, cancelled and fully paid invoices are excluded. Payments not yet recorded in Tradify will still appear outstanding.'
  },
  'ready-to-invoice':{
    title:'Ready to invoice calculation',category:'Assumption',categoryType:'assumption',icon:'fa-exclamation-circle',
    definition:'Completed jobs with billable value that has not yet been allocated to a non-cancelled invoice.',
    calculation:'Ready value for each job = recorded billable value − value already invoiced. The 3 shown jobs total $9,800 + $7,450 + $6,200 = $23,450. The other 8 jobs total $15,450. Overall: $23,450 + $15,450 = $38,900 across 11 jobs. Days finished = report date − job completion date.',
    source:'Tradify completed jobs, accepted fixed-price quote values or recorded charge-up lines, completion dates and existing invoice links.',
    note:'This is a prototype readiness rule. Fixed-price and charge-up values must be treated as alternative billing methods, not added together. A completed job may still need review before invoicing.'
  },
  'quote-win-rate':{
    title:'Quote win rate calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'The share of decided quotes that customers accepted in the selected period.',
    calculation:'9 accepted ÷ (9 accepted + 7 declined) = 56.25%, shown as 56%. Last month was 48%, so the win rate is up 8 points.',
    source:'Latest Tradify quote versions marked Accepted or Declined.',
    note:'Draft, open, expired and cancelled quotes are excluded until the customer decides.'
  },
  'open-quotes':{
    title:'Open quotes calculation',category:'Tradify data',categoryType:'tradify',icon:'fa-database',
    definition:'The ex-tax value of sent, unexpired quotes still awaiting a customer decision.',
    calculation:'3 quiet quotes worth $18,900 + 5 fresh quotes worth $15,600 = $34,500 across 8 open quotes.',
    source:'Current open, unexpired Tradify quotes that have been sent to customers.',
    note:'Draft quotes and quotes already accepted, declined, cancelled or expired are excluded.'
  },
  'quiet-quotes':{
    title:'Quotes to follow up calculation',category:'Assumption',categoryType:'assumption',icon:'fa-exclamation-circle',
    definition:'Open quotes sent at least 14 days ago with no recorded customer decision.',
    calculation:'$9,200 + $6,100 + $3,600 = $18,900 across 3 quotes quiet for 14 days or more.',
    source:'Tradify quote sent dates and current statuses.',
    note:'Fourteen days is a prototype follow-up threshold. A customer may have replied outside Tradify.'
  },
  'fresh-quotes':{
    title:'New quotes calculation',category:'Tradify data',categoryType:'tradify',icon:'fa-database',
    definition:'Open quotes sent during the selected week.',
    calculation:'Five quotes sent from 25–31 August total $15,600.',
    source:'Tradify quote sent dates, values and current statuses.',
    note:'A quote remains in this figure while it is open, even if the customer has replied outside Tradify.'
  },
  'enquiries-to-quote':{
    title:'Enquiries to quote calculation',category:'Assumption',categoryType:'assumption',icon:'fa-exclamation-circle',
    definition:'Open enquiries that do not yet have a draft or sent quote.',
    calculation:'Three open enquiries have no quote attached. All three are shown.',
    source:'Tradify enquiry status and linked quote records.',
    note:'An enquiry may not need a quote, so review its status before creating one.'
  },
  'quote-pipeline':{
    title:'Quote pipeline calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Current open quote value alongside quote decisions made in the last 30 days.',
    calculation:'Open: 8 quotes worth $34,500, split into $15,600 fresh and $18,900 quiet. Decisions in the last 30 days: 9 accepted worth $42,700 and 7 declined worth $30,900.',
    source:'Tradify quote values, sent dates and current statuses.',
    note:'Open and decided figures are different populations and should not be added together.'
  },
  'booked-ahead':{
    title:'Booked ahead calculation',category:'Quoted estimate',categoryType:'assumption',icon:'fa-exclamation-circle',
    definition:'Committed work value, estimated delivery cost and potential gross profit from scheduled jobs and accepted quotes.',
    calculation:'$264,500 committed value = $142,000 in Sep + $88,500 in Oct + $34,000 in Nov. $264,500 − $179,900 estimated cost = $84,600 potential gross profit. $84,600 ÷ $264,500 = 32.0% estimated margin.',
    source:'Accepted quote values and quoted labour, material, subcontractor and other cost estimates held in Tradify.',
    note:'Committed value is not expected cash. Cost and profit use quoted estimates, not costs recorded during the job, so actual gross profit may be lower.'
  },
  'winning-booked-ahead':{
    title:'Booked ahead calculation',category:'Quoted estimate',categoryType:'assumption',icon:'fa-exclamation-circle',
    definition:'Committed work value, estimated delivery cost and potential gross profit from scheduled jobs and accepted quotes.',
    calculation:'$88,400 committed value = $42,500 in Sep + $29,600 in Oct + $16,300 in Nov. $88,400 − $55,700 estimated cost = $32,700 potential gross profit. $32,700 ÷ $88,400 = 37.0% estimated margin.',
    source:'Accepted quote values and quoted labour, material, subcontractor and other cost estimates held in Tradify.',
    note:'Committed value is not expected cash. Cost and profit use quoted estimates, not costs recorded during the job, so actual gross profit may be lower.'
  },
  'demand-performance':{
    title:'Profitability calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Gross profit and margin on work invoiced in the selected period.',
    calculation:'$186,400 invoiced − $121,160 cost of work = $65,240 gross profit. $65,240 ÷ $186,400 = 35.0%.',
    source:'Invoice lines linked to jobs, plus recorded labour, material and miscellaneous job costs.',
    note:'This is gross margin before business overheads, tax and owner drawings. Missing job costs will overstate profit.'
  },
  'combined-financial':{
    title:'Overall financial performance',category:'Combined calculation',categoryType:'calculated',icon:'fa-superscript',
    definition:'A combined view of invoiced work, job margin and actual cash movement over the last 30 days.',
    calculation:'$186,400 invoiced produced $65,240 gross profit at 35.0% margin. Cash received was $24,600 and cash paid was $31,900, leaving net cash of -$7,300.',
    source:'Tradify invoices and job costs, combined with accounting or bank transaction data for money out.',
    note:'Invoiced revenue and cash received are different measures. An invoice only affects cash when the customer pays it.'
  },
  'winning-work':{
    title:'Winning work calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Quote outcomes, open quote value and accepted quote value attached to active jobs.',
    calculation:'Win rate = Accepted ÷ (Accepted + Declined) = 24%. Previous win rate: 37%. Change: -13 points. Open, unexpired sent quotes total $58,900. Accepted ex-tax value on Scheduled jobs is $10,500 and In Progress jobs is $7,000, totalling $17,500.',
    source:'Win rate uses latest Quote versions by Quote date and current status. Pipeline uses current open, unexpired, manually sent Quotes. Booked value uses accepted ex-tax Quotes linked to Scheduled or In Progress jobs.',
    note:'Cancelled, open and draft quotes are excluded from win rate. Accepted value is classified by whole-job status, not allocated to individual appointments.'
  },
  'weeks-booked':{
    title:'Weeks of work booked calculation',category:'Assumption',categoryType:'assumption',icon:'fa-exclamation-circle',
    definition:'Original accepted quoted labour expressed as weeks at an assumed team capacity.',
    calculation:'Accepted direct labour hours plus accepted BOM labour hours (parent quantity × component quantity), divided by assumed productive hours per week = 2.5 weeks.',
    source:'Accepted quoted labour quantities plus an assumed weekly capacity.',
    note:'This is original quoted labour, not remaining work. Tradify has no staff capacity, leave or remaining-work model today, so treat it as a prototype assumption.'
  },
  'cash-outlook':{
    title:'Cash outlook calculation',category:'Accounting data required',categoryType:'accounting',icon:'fa-share-alt',
    definition:'Expected cash balance after known money due in and expected money due out over 8 weeks.',
    calculation:'Each weekly balance = previous balance + invoices expected due − expected bills, payroll and expenses. Start: $31,400. Week 1: $31,400 + $1,200 = $32,600. Week 2: $32,600 − $3,400 = $29,200. Week 3: $29,200 + $800 = $30,000. Week 4: $30,000 − $5,200 = $24,800. Week 5: $24,800 − $2,800 = $22,000. Week 6: $22,000 + $900 = $22,900. Week 7: $22,900 − $7,200 = $15,700. Week 8: $15,700 − $3,100 = $12,600. Overall change: $12,600 − $31,400 = -$18,800.',
    source:'Unpaid invoice due dates from Tradify, plus starting balance, supplier payments, payroll and expenses from new accounting or bank data.',
    note:'Every point after today is projected. This is a forecast, not a guarantee. Tradify supplier bills have due dates but no actual payment records.'
  },
  'cash-trend':{
    title:'Cash balance trend calculation',category:'Accounting data required',categoryType:'accounting',icon:'fa-share-alt',
    definition:'One continuous cash balance, reconstructed from actual weekly cash movement through today and then extended with the 8-week forecast.',
    calculation:'Actual weekly net movement was +$500, -$2,000, -$1,800 and -$4,000. Working backwards from today’s $31,400 balance gives $38,700 opening, then weekly closing balances of $39,200, $37,200, $35,400 and $31,400. Forecast balances are $32,600, $29,200, $30,000, $24,800, $22,000, $22,900, $15,700 and $12,600.',
    source:'Actual customer receipts and settled outgoings, plus today’s starting balance and scheduled invoice and bill dates.',
    note:'The solid line is actual; the dashed line is forecast. The calculation assumes today’s balance reconciles to the closing balance produced by the actual transactions. Forecast values are not a guarantee.'
  }
};
const calculationBackdrop=document.createElement('div');
calculationBackdrop.className='calculation-backdrop';
calculationBackdrop.id='calculationBackdrop';
calculationBackdrop.hidden=true;
const calculationPopover=document.createElement('section');
calculationPopover.className='calculation-popover';
calculationPopover.id='calculationPopover';
calculationPopover.setAttribute('role','dialog');
calculationPopover.setAttribute('aria-labelledby','calculationPopoverTitle');
calculationPopover.setAttribute('aria-modal','false');
calculationPopover.hidden=true;
document.body.append(calculationBackdrop,calculationPopover);
let savedRecipients=['Office team','office@example.com'];
let draftRecipients=[...savedRecipients];
let scheduled=false;
let savedSchedule={frequency:'Weekly',day:'Monday',period:'Last 7 days'};
let activeModal=null;
let lastFocusedElement=null;
let emailPreviewOpenedDirectly=false;
let activeCalculationTrigger=null;
let calculationCloseButton=null;
let calculationSheetOwnsInert=false;
let aiHighlightTimer=null;
let toastTimer=null;

const syncNavigation=()=>{
  const open=sidebar.classList.contains('open');
  if(mobileMedia.matches){
    sidebar.inert=!open;
    sidebar.setAttribute('aria-hidden',String(!open));
    mainContent.inert=open;
  }else{
    sidebar.inert=false;
    sidebar.removeAttribute('aria-hidden');
    mainContent.inert=false;
  }
};

const closeNavigation=(returnFocus=false)=>{
  sidebar.classList.remove('open');
  navScrim.classList.remove('visible');
  menuButton.setAttribute('aria-expanded','false');
  syncNavigation();
  if(returnFocus&&mobileMedia.matches)menuButton.focus();
};

const showToast=message=>{
  window.clearTimeout(toastTimer);
  toastMessage.textContent=message;
  toast.hidden=false;
  toastTimer=window.setTimeout(()=>{
    toast.hidden=true;
  },4200);
};

const demandPerformancePeriods={
  '30d':{dates:'02/08/2026 – 01/09/2026',revenue:186400,cost:121160,previous:38.2,comparison:'vs prior 30 days'},
  aug:{dates:'01/08/2026 – 31/08/2026',revenue:194900,cost:124800,previous:36.1,comparison:'vs July'},
  q:{dates:'01/07/2026 – 01/09/2026',revenue:371200,cost:232900,previous:37.4,comparison:'vs last quarter to date'},
  fy:{dates:'01/07/2026 – 01/09/2026',revenue:371200,cost:232900,previous:35.8,comparison:'vs last year to date'}
};
const formatDemandMoney=value=>`$${value.toLocaleString('en-AU')}`;
const demandRowLimit=3;
const renderDemandRows=flow=>{
  flow.querySelectorAll('[data-demand-owed]').forEach((row,index)=>{row.hidden=index>=demandRowLimit});
};
const renderDemandPerformance=flow=>{
  const periodSelect=flow.querySelector('.demand-period');
  if(!periodSelect)return;
  const period=demandPerformancePeriods[periodSelect.value];
  const profit=period.revenue-period.cost;
  const margin=profit/period.revenue*100;
  const delta=margin-period.previous;
  const down=delta<0;
  calculationMetadata['demand-performance'].calculation=`Gross profit: ${formatDemandMoney(period.revenue)} invoiced − ${formatDemandMoney(period.cost)} cost of work = ${formatDemandMoney(profit)}. Gross margin: ${formatDemandMoney(profit)} ÷ ${formatDemandMoney(period.revenue)} = ${margin.toFixed(1)}%. Previous comparison (${period.comparison.slice(3)}): ${period.previous.toFixed(1)}%. Margin change: ${margin.toFixed(1)}% − ${period.previous.toFixed(1)}% = ${delta>=0?'+':''}${delta.toFixed(1)} percentage points.`;
  flow.querySelector('[data-demand-margin]').textContent=`${margin.toFixed(1)}%`;
  const deltaElement=flow.querySelector('[data-demand-margin-delta]');
  deltaElement.classList.toggle('negative',down);
  deltaElement.classList.toggle('positive',!down);
  deltaElement.innerHTML=`<span class="demand-margin-change"><i class="fa fa-arrow-${down?'down':'up'}" aria-hidden="true"></i>${Math.abs(delta).toFixed(1)} pts</span><small>${period.comparison}</small>`;
  flow.querySelector('[data-demand-revenue-value]').textContent=formatDemandMoney(period.revenue);
  flow.querySelector('[data-demand-cost-value]').textContent=formatDemandMoney(period.cost);
  flow.querySelector('[data-demand-profit-value]').textContent=formatDemandMoney(profit);
  flow.querySelector('[data-demand-cost-bar]').style.width=`${period.cost/period.revenue*100}%`;
  flow.querySelector('[data-demand-profit-bar]').style.width=`${profit/period.revenue*100}%`;
};
const parseCashTrendMetric=part=>{
  const definitions=[
    {prefix:'Last week in ',label:'In',tone:'in'},
    {prefix:'Balance ',label:'Balance',tone:'balance'},
    {prefix:'Previous ',label:'Previous',tone:'balance'},
    {prefix:'Change ',label:'Change',tone:'net'},
    {prefix:'In ',label:'In',tone:'in'},
    {prefix:'Out ',label:'Out',tone:'out'},
    {prefix:'Net ',label:'Net',tone:'net'}
  ];
  const definition=definitions.find(item=>part.startsWith(item.prefix));
  if(definition)return {...definition,value:part.slice(definition.prefix.length)};
  return {label:'Balance',tone:'balance',value:part};
};
const createCashTrendTooltip=hit=>{
  const [title,...parts]=hit.dataset.tooltip.split(' · ');
  const metrics=parts.map(parseCashTrendMetric);
  const balance=metrics.shift();
  const tooltip=document.createElement('span');
  const forecast=title.toLowerCase().includes('forecast');
  tooltip.className=`cash-trend-tooltip ${forecast?'forecast':'actual'}${metrics.length?'':' compact'}`;
  tooltip.setAttribute('aria-hidden','true');
  const header=document.createElement('span');
  header.className='cash-trend-tooltip-header';
  const heading=document.createElement('span');
  heading.textContent=title;
  const value=document.createElement('strong');
  value.textContent=balance?.value||'';
  header.append(heading,value);
  tooltip.append(header);
  if(metrics.length){
    const caption=document.createElement('span');
    caption.className='cash-trend-tooltip-caption';
    caption.textContent=forecast?'Invoices due minus outgoings':'Payments received minus payments made';
    tooltip.append(caption);
  }
  if(metrics.length){
    const metricsElement=document.createElement('span');
    metricsElement.className='cash-trend-tooltip-metrics';
    metrics.forEach(metric=>{
      const item=document.createElement('span');
      item.className=`cash-trend-tooltip-metric ${metric.tone}${metric.value.startsWith('+')?' positive-value':metric.value.startsWith('−')? ' negative-value':''}`;
      const label=document.createElement('small');
      label.textContent=metric.label;
      const metricValue=document.createElement('strong');
      metricValue.textContent=metric.value;
      item.append(label,metricValue);
      metricsElement.append(item);
    });
    tooltip.append(metricsElement);
  }
  return tooltip;
};
const setupCashTrendInteractions=()=>{
  document.querySelectorAll('.cash-trend-chart').forEach(chart=>{
    const guide=document.createElement('span');
    guide.className='cash-trend-guide';
    guide.setAttribute('aria-hidden','true');
    chart.append(guide);
    chart.querySelectorAll('.cash-trend-hit').forEach(hit=>{
      const tooltip=createCashTrendTooltip(hit);
      hit.append(tooltip);
      const show=()=>{
        chart.style.setProperty('--guide-x',hit.style.getPropertyValue('--x'));
        guide.hidden=hit.dataset.tooltip.startsWith('Today');
        chart.classList.add('is-hovering');
        hit.classList.toggle('tooltip-below',Number.parseFloat(hit.style.getPropertyValue('--y'))<36);
        tooltip.style.removeProperty('--tooltip-shift');
        window.requestAnimationFrame(()=>{
          const chartRect=chart.getBoundingClientRect();
          const tooltipRect=tooltip.getBoundingClientRect();
          const padding=8;
          let shift=0;
          if(tooltipRect.left<chartRect.left+padding)shift=chartRect.left+padding-tooltipRect.left;
          if(tooltipRect.right>chartRect.right-padding)shift=chartRect.right-padding-tooltipRect.right;
          tooltip.style.setProperty('--tooltip-shift',`${Math.round(shift)}px`);
        });
      };
      const hide=()=>{
        chart.classList.remove('is-hovering');
        guide.hidden=false;
      };
      hit.addEventListener('pointerenter',show);
      hit.addEventListener('pointerleave',()=>{if(document.activeElement!==hit)hide()});
      hit.addEventListener('focus',show);
      hit.addEventListener('blur',hide);
    });
  });
};

const positionCalculationPopover=()=>{
  if(!activeCalculationTrigger||calculationPopover.hidden){
    return;
  }
  if(calculationMedia.matches){
    calculationPopover.style.removeProperty('left');
    calculationPopover.style.removeProperty('top');
    return;
  }
  const gap=8;
  const viewportPadding=8;
  const triggerRect=activeCalculationTrigger.getBoundingClientRect();
  calculationPopover.style.left='0px';
  calculationPopover.style.top='0px';
  const popoverRect=calculationPopover.getBoundingClientRect();
  let left=triggerRect.right+gap;
  if(left+popoverRect.width>window.innerWidth-viewportPadding){
    left=triggerRect.left-popoverRect.width-gap;
  }
  left=Math.max(viewportPadding,Math.min(left,window.innerWidth-popoverRect.width-viewportPadding));
  let top=triggerRect.top-10;
  top=Math.max(viewportPadding,Math.min(top,window.innerHeight-popoverRect.height-viewportPadding));
  calculationPopover.style.left=`${Math.round(left)}px`;
  calculationPopover.style.top=`${Math.round(top)}px`;
};

const setCalculationSheetInert=inert=>{
  calculationSheetOwnsInert=inert;
  appShell.inert=inert;
  productFooter.inert=inert;
  if(inert)sidebar.inert=true;else syncNavigation();
};

const closeCalculationPopover=(returnFocus=true)=>{
  if(!activeCalculationTrigger){
    return;
  }
  const trigger=activeCalculationTrigger;
  trigger.setAttribute('aria-expanded','false');
  activeCalculationTrigger=null;
  calculationCloseButton=null;
  calculationPopover.hidden=true;
  calculationBackdrop.hidden=true;
  document.body.classList.remove('calculation-sheet-open');
  if(calculationSheetOwnsInert)setCalculationSheetInert(false);
  if(returnFocus&&document.contains(trigger)){
    trigger.focus();
  }
};

const createCalculationDetail=(heading,copy,className='')=>{
  const section=document.createElement('section');
  section.className=`calculation-detail${className?` ${className}`:''}`;
  const title=document.createElement('h3');
  title.textContent=heading;
  const text=document.createElement('p');
  text.textContent=copy;
  section.append(title,text);
  return section;
};

const renderCalculationPopover=metadata=>{
  const header=document.createElement('header');
  header.className='calculation-popover-header';
  const badge=document.createElement('span');
  badge.className=`calculation-category ${metadata.categoryType}`;
  const badgeIcon=document.createElement('i');
  badgeIcon.className=`fa ${metadata.icon}`;
  badgeIcon.setAttribute('aria-hidden','true');
  badge.append(badgeIcon,document.createTextNode(metadata.category));
  const title=document.createElement('h2');
  title.id='calculationPopoverTitle';
  title.textContent=metadata.title;
  calculationCloseButton=document.createElement('button');
  calculationCloseButton.className='calculation-popover-close';
  calculationCloseButton.type='button';
  calculationCloseButton.setAttribute('aria-label','Close calculation details');
  const closeIcon=document.createElement('i');
  closeIcon.className='fa fa-times';
  closeIcon.setAttribute('aria-hidden','true');
  calculationCloseButton.append(closeIcon);
  calculationCloseButton.addEventListener('click',()=>closeCalculationPopover(true));
  header.append(badge,title,calculationCloseButton);
  const body=document.createElement('div');
  body.className='calculation-popover-body';
  body.append(
    createCalculationDetail('How it’s calculated',metadata.calculation,'calculation'),
    createCalculationDetail('Definition',metadata.definition),
    createCalculationDetail('Source',metadata.source)
  );
  if(metadata.note){
    body.append(createCalculationDetail('Important note',metadata.note,'important'));
  }
  const key=document.createElement('p');
  key.className='calculation-key';
  key.textContent='Labels: Tradify data is recorded; Calculated is worked out; Accounting data required needs a new connection; New tracking needed is not captured yet; Assumption is an estimate.';
  body.append(key);
  calculationPopover.replaceChildren(header,body);
};

const openCalculationPopover=trigger=>{
  if(activeCalculationTrigger===trigger){
    closeCalculationPopover(true);
    return;
  }
  if(activeCalculationTrigger){
    closeCalculationPopover(false);
  }
  const metadata=calculationMetadata[trigger.dataset.calc];
  if(!metadata){
    return;
  }
  activeCalculationTrigger=trigger;
  trigger.setAttribute('aria-expanded','true');
  renderCalculationPopover(metadata);
  calculationPopover.setAttribute('aria-modal',String(calculationMedia.matches));
  calculationPopover.hidden=false;
  calculationBackdrop.hidden=!calculationMedia.matches;
  document.body.classList.toggle('calculation-sheet-open',calculationMedia.matches);
  if(calculationMedia.matches)setCalculationSheetInert(true);
  window.requestAnimationFrame(()=>{
    if(activeCalculationTrigger!==trigger){
      return;
    }
    positionCalculationPopover();
    calculationCloseButton.focus();
  });
};

const setCalculationVisibility=(visible,persist=false,announce=false)=>{
  if(!visible){
    closeCalculationPopover(false);
  }
  document.body.classList.toggle('calculations-visible',visible);
  calculationToggle.checked=visible;
  if(persist){
    try{
      window.localStorage.setItem(calculationStorageKey,String(visible));
    }catch(error){}
  }
  if(announce){
    calculationAnnouncement.textContent=visible?'Calculation details available. Select an info icon next to a figure for details.':'Calculation details hidden.';
  }
};

const renderRecipients=()=>{
  recipientField.replaceChildren();
  draftRecipients.forEach((recipient,index)=>{
    const token=document.createElement('span');
    token.className='recipient-token';
    token.append(document.createTextNode(recipient));
    const removeButton=document.createElement('button');
    removeButton.type='button';
    removeButton.disabled=draftRecipients.length===1;
    removeButton.setAttribute('aria-label',draftRecipients.length===1?'At least one recipient is required':`Remove ${recipient}`);
    const icon=document.createElement('i');
    icon.className='fa fa-times';
    icon.setAttribute('aria-hidden','true');
    removeButton.append(icon);
    removeButton.addEventListener('click',()=>{draftRecipients.splice(index,1);renderRecipients()});
    token.append(removeButton);
    recipientField.append(token);
  });
  const invalid=draftRecipients.length===0;
  recipientField.classList.toggle('invalid',invalid);
  recipientError.hidden=!invalid;
};

const focusableModalElements=()=>Array.from(activeModal.querySelectorAll('button:not([disabled]),select:not([disabled]),[href],input:not([disabled])')).filter(element=>!element.hidden&&element.offsetParent!==null);

const openModal=(modal,initialFocus)=>{
  closeCalculationPopover(false);
  lastFocusedElement=document.activeElement;
  activeModal=modal;
  activeModal.hidden=false;
  modalBackdrop.hidden=false;
  document.body.classList.add('modal-open');
  appShell.inert=true;
  productFooter.inert=true;
  sidebar.inert=true;
  window.requestAnimationFrame(()=>initialFocus.focus());
};

const closeModal=()=>{
  if(!activeModal){
    return;
  }
  activeModal.hidden=true;
  activeModal=null;
  modalBackdrop.hidden=true;
  document.body.classList.remove('modal-open');
  appShell.inert=false;
  productFooter.inert=false;
  syncNavigation();
  if(lastFocusedElement&&document.contains(lastFocusedElement)){
    lastFocusedElement.focus();
  }
};

const openEmailPreviewModal=()=>{
  if(!draftRecipients.length){
    renderRecipients();
    recipientField.focus();
    return;
  }
  emailPreviewOpenedDirectly=false;
  scheduleModal.hidden=true;
  activeModal=emailPreviewModal;
  emailPreviewModal.hidden=false;
  lastFocusedElement=emailPreviewButton;
  window.requestAnimationFrame(()=>emailPreviewClose.focus());
};

const openEmailPreviewShortcut=()=>{
  setAiAnalysisVisibility(false);
  emailPreviewOpenedDirectly=true;
  openModal(emailPreviewModal,emailPreviewClose);
};

const returnToScheduleModal=()=>{
  if(emailPreviewOpenedDirectly){
    emailPreviewOpenedDirectly=false;
    closeModal();
    return;
  }
  emailPreviewModal.hidden=true;
  scheduleModal.hidden=false;
  activeModal=scheduleModal;
  window.requestAnimationFrame(()=>emailPreviewButton.focus());
};

const setAiAskVisibility=(visible,focus=false)=>{
  aiAskPanel.hidden=!visible;
  aiAskToggle.setAttribute('aria-expanded',String(visible));
  const icon=aiAskToggle.querySelector('.fa');
  icon.classList.toggle('fa-angle-down',!visible);
  icon.classList.toggle('fa-angle-up',visible);
  if(visible&&focus)window.requestAnimationFrame(()=>aiQuestionInput.focus());
};

const setAiAnalysisVisibility=visible=>{
  closeCalculationPopover(false);
  aiInlineAnalysis.hidden=!visible;
  aiAnalysisTrigger.setAttribute('aria-pressed',String(visible));
  aiAnalysisTrigger.classList.toggle('active',visible);
  document.body.classList.toggle('ai-analysis-active',visible);
  if(!visible){
    setAiAskVisibility(false);
    aiAnswer.hidden=true;
  }else{
    window.requestAnimationFrame(()=>aiInlineAnalysis.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'nearest'}));
  }
};

const getAiAnswer=question=>{
  const normalised=question.toLowerCase();
  if(normalised.includes('money out'))return {text:'Money out is $31,900, up $4,300 from July. This report does not break down the categories — check your accounting software for what changed.',source:'Money out · $31,900',target:'.money-out-figure'};
  if(normalised.includes('invoice')&&(normalised.includes('first')||normalised.includes('chase')))return {text:'Start with INV-2841 — it is the largest at $12,400 and is already 68 days overdue.',source:'Invoices to chase · INV-2841',target:'.demand-chasing'};
  if(normalised.includes('margin')||normalised.includes('profit'))return {text:'Margin is 35.0%, down 3.2 points — worth watching, but not urgent. The bigger issue is cash going out before finished and overdue work is collected.',source:'Profitability · 35.0% gross margin',target:'.demand-performance'};
  if(normalised.includes('fast')||normalised.includes('improve')||normalised.includes('cash'))return {text:'Chase the three oldest overdue invoices worth $27,630, then invoice the $38,900 of finished work. Both are money you have already earned.',source:'Invoices to chase · $27,630',target:'.demand-chasing'};
  return {text:'Cash timing needs the most attention. Chase the three oldest overdue invoices worth $27,630, then invoice the $38,900 of finished work.',source:'Net cash · -$7,300',target:'.net-figure'};
};

const showAiAnswer=question=>{
  const answer=getAiAnswer(question);
  aiAnswerQuestion.textContent=question;
  aiAnswerText.textContent=answer.text;
  aiAnswerSource.textContent=answer.source;
  aiAnswerSourceAction.dataset.aiTarget=answer.target;
  aiAnswer.hidden=false;
  aiAnswer.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'nearest'});
};

const focusAiTarget=selector=>{
  const target=document.querySelector(`#gettingPaidPanel ${selector}`);
  if(!target)return;
  window.clearTimeout(aiHighlightTimer);
  target.tabIndex=-1;
  target.classList.add('ai-source-highlight');
  target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'center'});
  target.focus({preventScroll:true});
  aiHighlightTimer=window.setTimeout(()=>target.classList.remove('ai-source-highlight'),1600);
};

const focusAiAnswerSource=()=>{
  setAiAskVisibility(false);
  focusAiTarget(aiAnswerSourceAction.dataset.aiTarget);
};

aiAnalysisTrigger.addEventListener('click',()=>setAiAnalysisVisibility(aiInlineAnalysis.hidden));
aiAnswerSourceAction.addEventListener('click',focusAiAnswerSource);
aiAskToggle.addEventListener('click',()=>setAiAskVisibility(aiAskPanel.hidden,true));
aiPriorityLinks.forEach(link=>link.addEventListener('click',()=>focusAiTarget(link.dataset.aiTarget)));
document.querySelectorAll('[data-ai-question]').forEach(button=>button.addEventListener('click',()=>showAiAnswer(button.dataset.aiQuestion)));
aiQuestionForm.addEventListener('submit',event=>{
  event.preventDefault();
  const question=aiQuestionInput.value.trim();
  if(!question){aiQuestionInput.focus();return}
  showAiAnswer(question);
  aiQuestionInput.value='';
});
document.addEventListener('click',event=>{
  if(aiAskPanel.hidden||aiAskPanel.contains(event.target)||aiAskToggle.contains(event.target))return;
  setAiAskVisibility(false);
});

calculationToggle.addEventListener('change',()=>{
  const visible=calculationToggle.checked;
  setCalculationVisibility(visible,true,true);
  if(visible){
    let keySeen=false;
    try{keySeen=window.localStorage.getItem(calculationKeyStorageKey)==='true'}catch(error){}
    if(!keySeen){
      showToast('Labels show whether a figure comes from Tradify, is calculated, needs accounting data, needs new tracking, or uses an assumption.');
      try{window.localStorage.setItem(calculationKeyStorageKey,'true')}catch(error){}
    }
  }
});
calculationTriggers.forEach(trigger=>trigger.addEventListener('click',()=>openCalculationPopover(trigger)));
calculationBackdrop.addEventListener('click',()=>closeCalculationPopover(true));
calculationMedia.addEventListener('change',()=>{
  if(!activeCalculationTrigger){
    return;
  }
  calculationPopover.setAttribute('aria-modal',String(calculationMedia.matches));
  calculationBackdrop.hidden=!calculationMedia.matches;
  document.body.classList.toggle('calculation-sheet-open',calculationMedia.matches);
  if(calculationMedia.matches)setCalculationSheetInert(true);else if(calculationSheetOwnsInert)setCalculationSheetInert(false);
  window.requestAnimationFrame(positionCalculationPopover);
});
window.addEventListener('resize',positionCalculationPopover);
window.addEventListener('scroll',positionCalculationPopover,true);
document.addEventListener('click',event=>{
  if(!activeCalculationTrigger||calculationPopover.contains(event.target)){
    return;
  }
  if(event.target instanceof Element&&event.target.closest('.calc-trigger')){
    return;
  }
  closeCalculationPopover(false);
});

menuButton.addEventListener('click',()=>{
  const open=!sidebar.classList.contains('open');
  sidebar.classList.toggle('open',open);
  navScrim.classList.toggle('visible',open);
  menuButton.setAttribute('aria-expanded',String(open));
  syncNavigation();
  if(open)window.requestAnimationFrame(()=>sidebar.querySelector('button,a').focus());
});
navScrim.addEventListener('click',()=>closeNavigation(true));
mobileMedia.addEventListener('change',event=>{
  const focusWasInSidebar=sidebar.contains(document.activeElement);
  closeNavigation(false);
  if(event.matches&&focusWasInSidebar)menuButton.focus();
});

document.querySelectorAll('a[href="#"]').forEach(link=>link.addEventListener('click',event=>event.preventDefault()));

document.querySelectorAll('.period-link').forEach(button=>{
  button.addEventListener('click',()=>{
    if(button.dataset.period!=='month'){
      showToast('Only August data is loaded in this prototype.');
      return;
    }
    const summaries={
      month:'Showing August 2026, compared with July 2026',
      'last-month':'Showing July 2026, compared with June 2026',
      quarter:'Showing 1 Jul–30 Sep 2026, compared with 1 Apr–30 Jun 2026',
      'last-quarter':'Showing 1 Apr–30 Jun 2026, compared with 1 Jan–31 Mar 2026'
    };
    document.querySelectorAll('.period-link').forEach(periodButton=>{
      const active=periodButton===button;
      periodButton.classList.toggle('active',active);
      periodButton.setAttribute('aria-pressed',String(active));
    });
    appliedPeriod.textContent=summaries[button.dataset.period];
  });
});

const activateHealthView=(tab,updateUrl=true)=>{
  closeCalculationPopover(false);
  healthViewTabs.forEach(item=>{
    const active=item===tab;
    item.classList.toggle('active',active);
    item.setAttribute('aria-selected',String(active));
    item.tabIndex=active?0:-1;
  });
  healthViewPanels.forEach(panel=>{panel.hidden=panel.id!==tab.getAttribute('aria-controls')});
  const supportsAiAnalysis=tab.id==='gettingPaidTab';
  aiAnalysisTrigger.hidden=!supportsAiAnalysis;
  document.body.classList.toggle('ai-analysis-unavailable',!supportsAiAnalysis);
  if(!supportsAiAnalysis)setAiAnalysisVisibility(false);
  if(updateUrl){
    const url=new URL(window.location.href);
    if(tab.id==='winningWorkTab')url.searchParams.set('area','winning');else url.searchParams.delete('area');
    window.history.replaceState({},'',url);
  }
};
healthViewTabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>activateHealthView(tab));
  tab.addEventListener('keydown',event=>{
    let targetIndex=index;
    if(event.key==='ArrowRight')targetIndex=(index+1)%healthViewTabs.length;
    else if(event.key==='ArrowLeft')targetIndex=(index-1+healthViewTabs.length)%healthViewTabs.length;
    else if(event.key==='Home')targetIndex=0;
    else if(event.key==='End')targetIndex=healthViewTabs.length-1;
    else return;
    event.preventDefault();
    activateHealthView(healthViewTabs[targetIndex]);
    healthViewTabs[targetIndex].focus();
  });
});
const requestedHealthArea=new URLSearchParams(window.location.search).get('area');
if(requestedHealthArea==='winning'&&healthViewTabs[1])activateHealthView(healthViewTabs[1],false);

demandFlows.forEach(flow=>{
  const periodSelect=flow.querySelector('.demand-period');
  if(periodSelect)periodSelect.addEventListener('change',()=>{
    renderDemandPerformance(flow);
    if(activeCalculationTrigger?.dataset.calc==='demand-performance')closeCalculationPopover(false);
  });
  renderDemandRows(flow);
  renderDemandPerformance(flow);
});
document.querySelectorAll('.analyst-link').forEach(link=>link.addEventListener('click',()=>showToast(link.dataset.toast)));

document.querySelectorAll('.report-nav-item:not(.selected)').forEach(button=>{
  button.addEventListener('click',()=>showToast(`${button.dataset.report} isn’t part of this preview.`));
});

document.querySelector('#reportSelector').addEventListener('change',event=>{
  if(event.target.value!=='business'){
    const reportName=event.target.options[event.target.selectedIndex].text;
    showToast(`${reportName} isn’t part of this preview.`);
    event.target.value='business';
  }
});

emailPreviewButton.addEventListener('click',openEmailPreviewModal);
emailPreviewShortcut.addEventListener('click',openEmailPreviewShortcut);
modalClose.addEventListener('click',closeModal);
cancelSchedule.addEventListener('click',closeModal);
emailPreviewClose.addEventListener('click',returnToScheduleModal);
closeEmailPreview.addEventListener('click',returnToScheduleModal);
modalBackdrop.addEventListener('click',closeModal);
document.querySelectorAll('.modal').forEach(modal=>{
  modal.addEventListener('click',event=>{
    if(event.target===modal){
      closeModal();
    }
  });
});

scheduleForm.addEventListener('submit',event=>{
  event.preventDefault();
  if(!draftRecipients.length){renderRecipients();recipientField.focus();return}
  savedRecipients=[...draftRecipients];
  savedSchedule={frequency:document.querySelector('#frequency').value,day:document.querySelector('#sendDay').value,period:document.querySelector('#reportPeriod').value};
  const sendDay=savedSchedule.day;
  scheduled=true;
  closeModal();
  showToast(`Report scheduled. Your first email will be sent ${sendDay}.`);
});

stopSchedule.addEventListener('click',()=>{
  scheduled=false;
  closeModal();
  showToast('Report unscheduled.');
});


document.addEventListener('keydown',event=>{
  if(sidebar.classList.contains('open')&&event.key==='Escape'){
    event.preventDefault();
    closeNavigation(true);
    return;
  }
  if(sidebar.classList.contains('open')&&event.key==='Tab'){
    const focusable=Array.from(sidebar.querySelectorAll('button,[href]')).filter(element=>element.offsetParent!==null);
    const first=focusable[0];
    const last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){
      event.preventDefault();
      last.focus();
    }else if(!event.shiftKey&&document.activeElement===last){
      event.preventDefault();
      first.focus();
    }
    return;
  }
  if(!aiAskPanel.hidden&&event.key==='Escape'){
    event.preventDefault();
    setAiAskVisibility(false);
    aiAskToggle.focus();
    return;
  }
  if(activeCalculationTrigger&&event.key==='Escape'){
    event.preventDefault();
    closeCalculationPopover(true);
    return;
  }
  if(activeCalculationTrigger&&calculationMedia.matches&&event.key==='Tab'){
    event.preventDefault();
    calculationCloseButton.focus();
    return;
  }
  if(!activeModal){
    return;
  }
  if(event.key==='Escape'){
    event.preventDefault();
    if(activeModal===emailPreviewModal)returnToScheduleModal();else closeModal();
    return;
  }
  if(event.key==='Tab'){
    const focusable=focusableModalElements();
    if(!focusable.length){
      event.preventDefault();
      return;
    }
    const first=focusable[0];
    const last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){
      event.preventDefault();
      last.focus();
    }else if(!event.shiftKey&&document.activeElement===last){
      event.preventDefault();
      first.focus();
    }
  }
});

let calculationsInitiallyVisible=false;
try{
  calculationsInitiallyVisible=window.localStorage.getItem(calculationStorageKey)==='true';
}catch(error){}
setupCashTrendInteractions();
setCalculationVisibility(calculationsInitiallyVisible);
syncNavigation();
