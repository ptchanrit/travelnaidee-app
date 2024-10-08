### Task 2: React Web Application

การสร้าง Web Application คืองานหลักที่เหล่า Software Engineer, Frontend ที่วงในนั้นโปรดปราณสุด ๆ โดย Web Technology หลักของเราก็คือ React

ใน task นี้ เราจะต้องสร้าง Web Application สำหรับการค้นหา trip เพื่อให้ user อันเป็นที่รักของเรา ได้ค้นพบประสบการณ์ท่องเที่ยว ก่อนที่จะตัดสินใจเดินทางออกไปยังที่ต่าง ๆ

เพื่อความลื่นไหลในการใช้งาน เราจะต้องคำนึงถึง UX ที่ดีเสมอ โดยสามารถ เพิ่มเติม หรือ แก้ไข ส่วนต่าง ๆ ที่ต่างจากตัวอย่าง Design ที่เตรียมให้ เพื่อพัฒนา UX หรือ performance ของ website ให้ดียิ่งขึ้น

#### Requirement

สร้าง Web Application ที่ใช้ในการค้นหา trip จาก keyword ที่ user กรอกเข้ามา ตามตัวอย่าง Design ด้านล่าง โดยใช้ API จาก API Gateway ที่เราเขียนไว้ใน Task ที่ 1


ในการแสดงผลข้อมูลที่ได้มา จะต้องเป็นตามที่กำหนดไว้ดังต่อไปนี้

-  เมื่อกดชื่อทริป จะต้อง link ไปยัง url ที่ได้จาก trip data
-  เมื่อกดอ่านต่อ จะต้อง link ไปยัง url ที่ได้จาก trip data
-  จะต้องมีการแสดงผลรูปที่ได้รับมา เพื่อดึงดูดให้ user กดเข้าไปที่ตัวทริป
-  หมวดหมู่ที่แสดง สามารถกดและกลายเป็น search keyword โดยเป็นชื่อ tag นั้น
-  User สามารถ copy link และส่งต่อไปให้เพื่อน สำหรับ keyword เดียวกัน



## Update Change

- มีการปรับเปลี่ยน UI layout Main Image ให้เป็น verical image เนื่องจาก 1.ภาพวิวท่องเที่ยวส่วนใหญ่เป็นอัตราส่วน 16:9  2.graphic design font บนภาพได้ง่าย 3.ตามหลัก Element of Design การมองภาพ view ในรูปแบบ verical ให้ความรู้สึกผ่อนคลาย มากกว่า ซึ่งเหมาะกับ concept application
- ปรับ tag ให้เป็น badge เพื่อให้ดู tag ได้ง่าย
- ปรับ responsiblity ให้ column article เหมาะสมกับ display
