Owner Role:
    - Login: "phone number" vs "access code"
    - Dashboard:
        + Create user -> send email to this employee
        + Create work and set schedule
        + Chat

=> Quy trinh:
    - B1: owner go to /owner
    - B2: if login, role = owner => dashboard, else => login
    - B3: dashboard includes: manage employees (home), manage task, message

Employee Role:
    - Receive a link via gmail -> set up account: "email" vs "password", "name", etc...
    - Login: "email" vs "password"
    - Profile editing
    - Manage assigned tasks

=> Quy trinh (Procedure):
    - B1: User  go to / (home)
    - B2: if login, role = employee => go to dashboard
    - B3: dashboard includes: manage task, message


message---------------
users
 └─ userA
     └─ conversations (subcollection)
         ├─ conversationId1 → { conversationId: "abc123", lastMessage: "...", ... }
         └─ conversationId2 → ...

--------------
/conversations (collection)
 └─ abc123 (document) ← ID cuộc trò chuyện giữa userA và userB
     ├─ lastMessage: 'ok'
     ├─ lastUserName: 'Nguyễn Công Hoan'    -> Cái này để hiện ra danh sách
     ├─ lastTimestamp: 1718166400000 (Bỏ)

     /messages (subcollection)
      ├─ msg1 (document)
      │   ├─ senderId: 'userA'
      │   ├─ content: 'hello'
      │   ├─ timestamp: 1718166300000
      └─ msg2 (document)
          ├─ senderId: 'userB'
          ├─ content: 'ok'
          ├─ timestamp: 1718166400000
