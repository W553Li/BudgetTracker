import { Card, ProgressBar, Button, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";


export default function BudgetCard({name, amount, max, gray, hideButtons, onAddExpenseClick, onViewExpensesClick}) {
  const classNames = []
  // Change display colour depending on how much of the budget is spent
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10")
  } else if (gray) {
    classNames.push("bg-light")
  }

  // UI for the card
  return (
    <Card className={classNames.join(" ")}>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                <div className="me-2">{name}</div>
                <div className="d-flex align-items-baseline">{currencyFormatter.format(amount)} 
                  {max && (<span className="text-muted fs-6 ms-1"> / {currencyFormatter.format(max)} </span>) }
                </div>
            </Card.Title>
            {max && (<ProgressBar className="rounded-pill" variant={getProgressBarVariant(amount, max)} min={0} max={max} now={amount}></ProgressBar>)}
            {!hideButtons && (<Stack direction="horizontal" gap="2" className="mt-4">
              <Button variant="outline-primary" className="ms-auto" onClick={onAddExpenseClick}>Add Expense</Button>
              <Button onClick={onViewExpensesClick} variant="outline-secondary">View Expense</Button>
            </Stack>)}
        </Card.Body>
    </Card>
  )
}

// Change the colour of the bar depending on how much budget is spent
function getProgressBarVariant(amount, max) {
  const ratio = amount / max
  if (ratio < 0.5) {
    return "primary"
  }
  if (ratio < 0.75) {
    return "warning"
  }
  return "danger"
}