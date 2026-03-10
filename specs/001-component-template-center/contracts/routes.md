# UI Contract: Routes

## Required Routes

| Route | Purpose | Source of Content |
|-------|---------|-------------------|
| `/` or hub route | Component template entry page | Template registry |
| `/templates/list` | List template demo | Mock list data + list interaction state |
| `/templates/interaction` | Button and confirmation dialog demo | Local button and dialog scenarios |
| `/templates/speckit-record` | Conversation prompts and Speckit generation record | Local Speckit record data |

## Contract Rules

- Every `ready` template entry in the registry must point to a reachable route.
- Every template route must expose a clear navigation path back to the hub.
- Future templates should follow the `/templates/<name>` pattern unless the hub
  route itself changes.
