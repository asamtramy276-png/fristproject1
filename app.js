const STORAGE_KEY = "klink_school_system_v1";

// 3 حسابات إدارية ثابتة ومحمية (من ضمنها أسامة رامي المالك)
const ADMINS = [
  {
    id: "ADM-01",
    name: "أسامة رامي",
    nationalId: "30901012100111",
    title: "المالك ومدير النظام"
  },
  {
    id: "ADM-02",
    name: "محمود كمال",
    nationalId: "28505142100422",
    title: "مدير الشؤون الإدارية"
  },
  {
    id: "ADM-03",
    name: "هالة عبد الرحمن",
    nationalId: "28811092100789",
    title: "وكيل المدرسة لشؤون الطلاب"
  }
];

const GRADES = [
  "الصف الأول الثانوي الصناعي",
  "الصف الثاني الثانوي الصناعي",
  "الصف الثالث الثانوي الصناعي"
];

const INITIAL_STATE = {
  departments: [
    "قسم البرمجة وتطوير الويب",
    "قسم الشبكات وأمن المعلومات",
    "قسم الكهرباء والإلكترونيات الصناعية"
  ],
  trainers: [
    {
      id: "TRN-01",
      name: "أ. محمد حسن",
      nationalId: "28203122100101",
      type: "theory",
      subject: "اللغة العربية والرياضيات",
      assignedDepartment: "",
      schedule: [
        { day: "الأحد", grade: "الصف الأول الثانوي الصناعي", slot: "الحصة الأولى والثانية", topic: "قواعد اللغة والرياضيات الفنية" },
        { day: "الأحد", grade: "الصف الثاني الثانوي الصناعي", slot: "الحصة الثالثة", topic: "النصوص والهندسة التطبيقية" },
        { day: "الاثنين", grade: "الصف الثالث الثانوي الصناعي", slot: "الحصة الأولى والثانية", topic: "التعبير الفني والرياضيات المتقدمة" }
      ]
    },
    {
      id: "TRN-02",
      name: "أ. نهى عادل",
      nationalId: "29007202100202",
      type: "theory",
      subject: "اللغة الإنجليزية والعلوم والزراعة",
      assignedDepartment: "",
      schedule: [
        { day: "الأحد", grade: "الصف الأول الثانوي الصناعي", slot: "الحصة الثالثة", topic: "المصطلحات التقنية بالإنجليزية" },
        { day: "الاثنين", grade: "الصف الأول الثانوي الصناعي", slot: "الحصة الأولى والثانية", topic: "العلوم التطبيقية والأساسيات الزراعية" },
        { day: "الاثنين", grade: "الصف الثاني الثانوي الصناعي", slot: "الحصة الثالثة", topic: "العلوم البيئية والزراعة الحديثة" }
      ]
    },
    {
      id: "TRN-03",
      name: "م. كريم طارق",
      nationalId: "29309152100303",
      type: "practical",
      subject: "تدريب عملي وورش تخصصية",
      assignedDepartment: "قسم البرمجة وتطوير الويب",
      schedule: []
    },
    {
      id: "TRN-04",
      name: "م. مريم سامي",
      nationalId: "29501252100404",
      type: "practical",
      subject: "تدريب عملي ومعامل الشبكات",
      assignedDepartment: "قسم الشبكات وأمن المعلومات",
      schedule: []
    }
  ],
  students: [
    {
      id: "STU-01",
      name: "يوسف أحمد محمود",
      nationalId: "30910122101001",
      grade: "الصف الأول الثانوي الصناعي",
      department: "قسم البرمجة وتطوير الويب",
      guardianPhone: "01012345678",
      monthlyFee: 1500,
      feePaid: false,
      lastFeeNotice: "تنبيه نهاية الشهر: يرجى سداد المصروفات الدراسية الشهرية وقدرها 1500 ج.م على رقم ولي الأمر 01012345678.",
      theoryTeachers: {
        arabic: "أ. محمد حسن",
        math: "أ. محمد حسن",
        english: "أ. نهى عادل",
        science: "أ. نهى عادل",
        socialStudies: "أ. نهى عادل",
        agriculture: "أ. نهى عادل"
      },
      workshopEngineer: "م. كريم طارق",
      theorySchedule: [
        { day: "الأحد", subjects: ["عربي", "رياضيات", "إنجليزي"] },
        { day: "الاثنين", subjects: ["علوم", "دراسات", "زراعة"] }
      ],
      practicalDays: ["الثلاثاء", "الأربعاء", "الخميس"],
      attendance: "حاضر (20 يوم) - غياب (1 يوم) - تأخير (1 مرة)",
      behavior: "منضبط ومتعاون مع زملائه والمدربين",
      grades: {
        examScore: 44,
        behaviorScore: 10,
        total: 54
      },
      teacherNotes: "مستوى جيد جداً في أساسيات البرمجة والالتزام بالحضور، يُنصح بمراجعة قواعد اللغة الإنجليزية."
    },
    {
      id: "STU-02",
      name: "عمر خالد إبراهيم",
      nationalId: "30804182101002",
      grade: "الصف الثاني الثانوي الصناعي",
      department: "قسم الشبكات وأمن المعلومات",
      guardianPhone: "01198765432",
      monthlyFee: 1500,
      feePaid: true,
      lastFeeNotice: "تم سداد مصروفات الشهر بنجاح (1500 ج.م) لولي الأمر على الرقم 01198765432.",
      theoryTeachers: {
        arabic: "أ. محمد حسن",
        math: "أ. محمد حسن",
        english: "أ. نهى عادل",
        science: "أ. نهى عادل",
        socialStudies: "أ. نهى عادل",
        agriculture: "أ. نهى عادل"
      },
      workshopEngineer: "م. مريم سامي",
      theorySchedule: [
        { day: "الأحد", subjects: ["عربي", "رياضيات", "إنجليزي"] },
        { day: "الاثنين", subjects: ["علوم", "دراسات", "زراعة"] }
      ],
      practicalDays: ["الثلاثاء", "الأربعاء", "الخميس"],
      attendance: "حاضر (22 يوم) - غياب (0 يوم) - تأخير (0 مرة)",
      behavior: "متميز وملتزم بالتعليمات الفنية",
      grades: {
        examScore: 47,
        behaviorScore: 10,
        total: 57
      },
      teacherNotes: "أداء ممتاز في معامل الشبكات وتطبيق التوصيلات بدقة عالية."
    }
  ]
};

let state = loadState();
let currentRole = "student";
let currentSession = null;
let adminGradeFilter = "ALL";
const revealedNids = new Set();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(INITIAL_STATE);
    const parsed = JSON.parse(raw);
    return {
      departments: Array.isArray(parsed.departments) ? parsed.departments : structuredClone(INITIAL_STATE.departments),
      trainers: Array.isArray(parsed.trainers) ? parsed.trainers : structuredClone(INITIAL_STATE.trainers),
      students: Array.isArray(parsed.students) ? parsed.students : structuredClone(INITIAL_STATE.students)
    };
  } catch {
    return structuredClone(INITIAL_STATE);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function showError(msg) {
  const box = document.getElementById("login-error");
  box.textContent = msg;
  box.classList.remove("hidden");
}

function clearError() {
  const box = document.getElementById("login-error");
  box.textContent = "";
  box.classList.add("hidden");
}

function normalizeText(str) {
  return String(str || "").trim().replace(/\s+/g, " ");
}

function maskNid(nid) {
  const clean = String(nid || "");
  if (clean.length < 6) return "••••••••••••••";
  return clean.slice(0, 3) + "••••••••" + clean.slice(-3);
}

function renderNidBadge(key, nid) {
  const isShown = revealedNids.has(key);
  const displayVal = isShown ? nid : maskNid(nid);
  return `
    <div class="nid-row">
      <span>الرقم القومي: <strong dir="ltr">${displayVal}</strong></span>
      <button type="button" class="btn-sm" data-action="toggle-nid-view" data-nid-key="${key}">
        ${isShown ? "إخفاء" : "إظهار"}
      </button>
      <button type="button" class="btn-sm" data-action="copy-nid" data-nid-val="${nid}">
        نسخ
      </button>
    </div>
  `;
}

// تهيئة شاشة الدخول
function initLoginUI() {
  const roleButtons = document.querySelectorAll(".role-btn");
  const gradeGroup = document.getElementById("grade-group");
  const nidInput = document.getElementById("national-id");
  const toggleNidBtn = document.getElementById("toggle-nid");
  const loginForm = document.getElementById("login-form");
  const logoutBtn = document.getElementById("logout-btn");

  roleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      roleButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      currentRole = btn.dataset.role;
      gradeGroup.classList.toggle("hidden", currentRole !== "student");
      clearError();
    });
  });

  nidInput.addEventListener("input", () => {
    nidInput.value = nidInput.value.replace(/\D/g, "").slice(0, 14);
  });

  toggleNidBtn.addEventListener("click", () => {
    const isPass = nidInput.type === "password";
    nidInput.type = isPass ? "text" : "password";
    toggleNidBtn.textContent = isPass ? "إخفاء" : "عرض";
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearError();

    const name = normalizeText(document.getElementById("full-name").value);
    const nationalId = normalizeText(nidInput.value);
    const grade = document.getElementById("grade-select").value;

    if (!name) {
      return showError("يرجى إدخال الاسم الكامل المسجل.");
    }
    if (!/^\d{14}$/.test(nationalId)) {
      return showError("الرقم القومي غير صحيح؛ يجب أن يتكون من 14 رقماً.");
    }

    if (currentRole === "student") {
      const matched = state.students.filter(
        (s) => normalizeText(s.name) === name && s.nationalId === nationalId
      );
      if (matched.length === 0) {
        return showError("تعذر تسجيل الدخول: الاسم أو الرقم القومي غير مسجل في النظام.");
      }
      const student = matched.find((s) => s.grade === grade);
      if (!student) {
        return showError("الصف الدراسي المختار لا يطابق بيانات الطالب المسجلة.");
      }
      currentSession = { role: "student", studentId: student.id };
      openApp();
      return;
    }

    if (currentRole === "trainer") {
      const trainer = state.trainers.find(
        (t) => normalizeText(t.name) === name && t.nationalId === nationalId
      );
      if (!trainer) {
        return showError("تعذر تسجيل الدخول: بيانات المدرب أو المهندس غير صحيحة.");
      }
      currentSession = { role: "trainer", trainerId: trainer.id };
      openApp();
      return;
    }

    if (currentRole === "admin") {
      const admin = ADMINS.find(
        (a) => normalizeText(a.name) === name && a.nationalId === nationalId
      );
      if (!admin) {
        return showError("تعذر تسجيل الدخول: هذه البيانات غير مخولة لدخول لوحة الإدارة.");
      }
      currentSession = { role: "admin", adminId: admin.id };
      openApp();
    }
  });

  logoutBtn.addEventListener("click", () => {
    currentSession = null;
    revealedNids.clear();
    document.getElementById("login-form").reset();
    clearError();
    document.getElementById("app-view").classList.add("hidden");
    document.getElementById("login-view").classList.remove("hidden");
  });
}

function openApp() {
  document.getElementById("login-view").classList.add("hidden");
  document.getElementById("app-view").classList.remove("hidden");
  renderDashboard();
}

function renderDashboard() {
  if (!currentSession) return;
  const main = document.getElementById("main-content");
  const nameEl = document.getElementById("current-user-name");
  const roleEl = document.getElementById("current-user-role");
  const subEl = document.getElementById("topbar-subtitle");

  if (currentSession.role === "student") {
    const student = state.students.find((s) => s.id === currentSession.studentId);
    if (!student) return;
    nameEl.textContent = student.name;
    roleEl.textContent = "طالب / ولي أمر (عرض فقط)";
    subEl.textContent = `${student.grade} — ${student.department}`;
    main.innerHTML = renderStudentPortal(student);
    return;
  }

  if (currentSession.role === "trainer") {
    const trainer = state.trainers.find((t) => t.id === currentSession.trainerId);
    if (!trainer) return;
    nameEl.textContent = trainer.name;
    roleEl.textContent = trainer.type === "theory" ? "مدرب نظري" : "مهندس / مدرب عملي";
    subEl.textContent =
      trainer.type === "theory"
        ? `المادة: ${trainer.subject}`
        : `القسم المسؤول: ${trainer.assignedDepartment}`;
    main.innerHTML = renderTrainerPortal(trainer);
    bindTrainerEvents(trainer);
    return;
  }

  if (currentSession.role === "admin") {
    const admin = ADMINS.find((a) => a.id === currentSession.adminId);
    if (!admin) return;
    nameEl.textContent = admin.name;
    roleEl.textContent = admin.title;
    subEl.textContent = "لوحة تحكم الإدارة العليا وإدارة الأقسام والطلاب والمدربين";
    main.innerHTML = renderAdminPortal();
    bindAdminEvents();
  }
}

// ==================== بوابة الطالب / ولي الأمر ====================
function renderStudentPortal(student) {
  const feeStatusBadge = student.feePaid
    ? `<span class="pill pill-success">مسدد (${student.monthlyFee} ج.م)</span>`
    : `<span class="pill pill-danger">غير مسدد (${student.monthlyFee} ج.م)</span>`;

  const theoryRows = student.theorySchedule
    .map(
      (row) => `
      <tr>
        <td><strong>${row.day}</strong></td>
        <td>${row.subjects.join(" — ")}</td>
      </tr>
    `
    )
    .join("");

  return `
    <div class="grid-2">
      <div class="card">
        <div class="card-title">
          <span>الملف الشخصي والبيانات الأكاديمية</span>
          <span class="pill pill-info">للقراءة فقط</span>
        </div>
        <ul class="info-list">
          <li><span class="label">اسم الطالب</span><span class="val">${student.name}</span></li>
          <li><span class="label">الرقم القومي</span><span class="val" dir="ltr">${student.nationalId}</span></li>
          <li><span class="label">الصف الدراسي</span><span class="val">${student.grade}</span></li>
          <li><span class="label">القسم التخصصي</span><span class="val">${student.department}</span></li>
          <li><span class="label">رقم ولي الأمر</span><span class="val" dir="ltr">${student.guardianPhone}</span></li>
          <li><span class="label">المصروفات الشهرية</span><span class="val">${feeStatusBadge}</span></li>
        </ul>
        <div class="fee-alert">
          <strong>إشعار نهاية الشهر لولي الأمر:</strong>
          <p style="margin-top:4px;">${student.lastFeeNotice}</p>
        </div>
      </div>

      <div class="card">
        <div class="card-title"><span>الأساتذة والمهندسون المسؤولون</span></div>
        <ul class="info-list">
          <li><span class="label">أستاذ اللغة العربية</span><span class="val">${student.theoryTeachers.arabic}</span></li>
          <li><span class="label">أستاذ الرياضيات</span><span class="val">${student.theoryTeachers.math}</span></li>
          <li><span class="label">أستاذ اللغة الإنجليزية</span><span class="val">${student.theoryTeachers.english}</span></li>
          <li><span class="label">أستاذ العلوم</span><span class="val">${student.theoryTeachers.science}</span></li>
          <li><span class="label">أستاذ الدراسات الاجتماعية</span><span class="val">${student.theoryTeachers.socialStudies}</span></li>
          <li><span class="label">أستاذ الزراعة</span><span class="val">${student.theoryTeachers.agriculture}</span></li>
          <li><span class="label">مهندس / مدرب العملي</span><span class="val">${student.workshopEngineer}</span></li>
        </ul>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span>جدول الحصص النظري والعملي</span></div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>اليوم</th>
                <th>المواد / البرنامج</th>
              </tr>
            </thead>
            <tbody>
              ${theoryRows}
              <tr>
                <td><strong>الثلاثاء والأربعاء والخميس</strong></td>
                <td><span class="pill pill-warn">يوم عملي — ${student.department} (${student.workshopEngineer})</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-title"><span>الدرجات والحضور والسلوك والملاحظات</span></div>
        <ul class="info-list">
          <li><span class="label">درجة الامتحان</span><span class="val">${student.grades.examScore}</span></li>
          <li><span class="label">درجة السلوك</span><span class="val">${student.grades.behaviorScore}</span></li>
          <li><span class="label">الإجمالي</span><span class="val"><span class="pill pill-success">${student.grades.total}</span></span></li>
          <li><span class="label">الحضور والغياب والتأخير</span><span class="val">${student.attendance}</span></li>
          <li><span class="label">السلوك المسجل</span><span class="val">${student.behavior}</span></li>
        </ul>
        <div style="margin-top:12px;">
          <strong style="font-size:0.9rem;color:var(--navy);">ملاحظات المعلمين والمهندسين:</strong>
          <div class="note-box" style="margin-top:6px;">${student.teacherNotes}</div>
        </div>
      </div>
    </div>
  `;
}

// ==================== بوابة المدرب / المهندس ====================
function renderTrainerPortal(trainer) {
  const isTheory = trainer.type === "theory";
  const targetStudents = isTheory
    ? state.students
    : state.students.filter((s) => s.department === trainer.assignedDepartment);

  const scheduleSection = isTheory
    ? `
      <div class="card">
        <div class="card-title"><span>جدول الحصص النظري (${trainer.subject})</span></div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>اليوم</th>
                <th>الصف الدراسي</th>
                <th>الموعد</th>
                <th>موضوع الحصة</th>
              </tr>
            </thead>
            <tbody>
              ${trainer.schedule
                .map(
                  (item) => `
                  <tr>
                    <td><strong>${item.day}</strong></td>
                    <td>${item.grade}</td>
                    <td>${item.slot}</td>
                    <td>${item.topic}</td>
                  </tr>
                `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `
    : `
      <div class="card">
        <div class="card-title">
          <span>القسم العملي المسؤول عنه: ${trainer.assignedDepartment}</span>
          <span class="pill pill-info">قسم واحد فقط</span>
        </div>
        <p style="font-size:0.9rem;color:var(--muted);">
          أيام التدريب العملي: الثلاثاء والأربعاء والخميس. يمكنك متابعة وتحديث الحضور والغياب والتأخير ودرجات الامتحان والسلوك والملاحظات لطلاب قسمك.
        </p>
      </div>
    `;

  const studentCards = targetStudents.length
    ? targetStudents
        .map(
          (st) => `
          <form class="student-mini-card trainer-eval-form" data-student-id="${st.id}">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
              <div>
                <strong style="font-size:1rem;color:var(--navy);">${st.name}</strong>
                <div style="font-size:0.82rem;color:var(--muted);">${st.grade} — ${st.department}</div>
              </div>
              <span class="pill pill-success">الإجمالي: ${st.grades.total}</span>
            </div>

            <div class="grid-3">
              <div class="form-group">
                <label>درجة الامتحان</label>
                <input type="number" name="examScore" value="${st.grades.examScore}" min="0" max="100" required />
              </div>
              <div class="form-group">
                <label>درجة السلوك</label>
                <input type="number" name="behaviorScore" value="${st.grades.behaviorScore}" min="0" max="50" required />
              </div>
              <div class="form-group">
                <label>السلوك المسجل</label>
                <input type="text" name="behavior" value="${st.behavior}" required />
              </div>
            </div>

            <div class="form-group">
              <label>الحضور والغياب والتأخير</label>
              <input type="text" name="attendance" value="${st.attendance}" required />
            </div>

            <div class="form-group">
              <label>ملاحظات تظهر في ملف الطالب</label>
              <textarea name="teacherNotes" rows="2">${st.teacherNotes}</textarea>
            </div>

            <button type="submit" class="btn-primary">حفظ تقييم وملاحظات الطالب</button>
          </form>
        `
        )
        .join("")
    : `<div class="note-box">لا يوجد طلاب مسجلون حالياً في هذا القسم.</div>`;

  return `
    ${scheduleSection}
    <div class="card">
      <div class="card-title"><span>متابعة الطلاب (الحضور، الغياب، التأخير، الدرجات، السلوك، الملاحظات)</span></div>
      ${studentCards}
    </div>
  `;
}

function bindTrainerEvents(trainer) {
  document.querySelectorAll(".trainer-eval-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const studentId = form.dataset.studentId;
      const student = state.students.find((s) => s.id === studentId);
      if (!student) return;

      const examScore = Number(form.elements.examScore.value) || 0;
      const behaviorScore = Number(form.elements.behaviorScore.value) || 0;
      student.grades.examScore = examScore;
      student.grades.behaviorScore = behaviorScore;
      student.grades.total = examScore + behaviorScore;
      student.behavior = normalizeText(form.elements.behavior.value);
      student.attendance = normalizeText(form.elements.attendance.value);
      student.teacherNotes = normalizeText(form.elements.teacherNotes.value);

      if (trainer.type === "practical") {
        student.workshopEngineer = trainer.name;
      }

      saveState();
      showToast(`تم حفظ بيانات وتقييم الطالب ${student.name}`);
      renderDashboard();
    });
  });
}

// ==================== لوحة تحكم الإدارة ====================
function renderAdminPortal() {
  const deptOptions = state.departments
    .map((d) => `<option value="${d}">${d}</option>`)
    .join("");

  const gradeOptions = GRADES.map((g) => `<option value="${g}">${g}</option>`).join("");

  const filterButtons = ["ALL", ...GRADES]
    .map((g) => {
      const label = g === "ALL" ? "الكل" : g;
      const activeClass = adminGradeFilter === g ? "active" : "";
      return `<button type="button" class="filter-btn ${activeClass}" data-grade-filter="${g}">${label}</button>`;
    })
    .join("");

  const deptCards = state.departments
    .map((dept) => {
      const deptStudents = state.students.filter(
        (s) => s.department === dept && (adminGradeFilter === "ALL" || s.grade === adminGradeFilter)
      );

      const studentItems = deptStudents.length
        ? deptStudents
            .map(
              (st) => `
              <div class="student-mini-card">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                  <div>
                    <strong>${st.name}</strong>
                    <div style="font-size:0.8rem;color:var(--muted);">${st.grade} • ولي الأمر: <span dir="ltr">${st.guardianPhone}</span></div>
                  </div>
                  <button type="button" class="btn-danger" data-action="delete-student" data-student-id="${st.id}">حذف</button>
                </div>
                ${renderNidBadge(`stu-${st.id}`, st.nationalId)}
                <div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:6px;align-items:center;">
                  <button type="button" class="btn-sm" data-action="toggle-fee" data-student-id="${st.id}">
                    ${st.feePaid ? "مسدد (1500 ج.م) — إلغاء السداد" : "غير مسدد (1500 ج.م) — تأكيد السداد"}
                  </button>
                  <button type="button" class="btn-sm" data-action="send-fee-reminder" data-student-id="${st.id}">
                    إرسال تذكير نهاية الشهر
                  </button>
                </div>
              </div>
            `
            )
            .join("")
        : `<p style="font-size:0.86rem;color:var(--muted);">لا يوجد طلاب في هذا القسم ضمن الفلتر الحالي.</p>`;

      return `
        <div class="dept-card">
          <div class="dept-header">
            <strong style="color:var(--navy);">${dept}</strong>
            <button type="button" class="btn-danger" data-action="delete-dept" data-dept="${dept}">حذف القسم</button>
          </div>
          ${studentItems}
          <div style="font-size:0.82rem;color:var(--muted);margin-top:8px;">عدد الطلاب المعروضين: ${deptStudents.length}</div>
        </div>
      `;
    })
    .join("");

  const trainerCards = state.trainers
    .map(
      (tr) => `
      <div class="student-mini-card">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
          <div>
            <strong>${tr.name}</strong>
            <span class="pill ${tr.type === "theory" ? "pill-info" : "pill-success"}" style="margin-right:6px;">
              ${tr.type === "theory" ? "مدرب نظري" : "مهندس عملي"}
            </span>
            <div style="font-size:0.82rem;color:var(--muted);margin-top:4px;">
              ${tr.type === "theory" ? `المواد: ${tr.subject}` : `القسم المسؤول: ${tr.assignedDepartment}`}
            </div>
          </div>
          <button type="button" class="btn-danger" data-action="delete-trainer" data-trainer-id="${tr.id}">حذف</button>
        </div>
        ${renderNidBadge(`trn-${tr.id}`, tr.nationalId)}
      </div>
    `
    )
    .join("");

  return `
    <div class="grid-3">
      <div class="card">
        <div class="card-title"><span>إضافة قسم جديد</span></div>
        <form id="add-dept-form">
          <div class="form-group">
            <label for="new-dept-name">اسم القسم التخصصي</label>
            <input type="text" id="new-dept-name" placeholder="مثال: قسم الذكاء الاصطناعي والروبوتات" required />
          </div>
          <button type="submit" class="btn-primary btn-block">إضافة القسم</button>
        </form>
      </div>

      <div class="card">
        <div class="card-title"><span>إضافة طالب جديد</span></div>
        <form id="add-student-form">
          <div class="form-group">
            <label for="stu-name">الاسم الكامل للطالب</label>
            <input type="text" id="stu-name" required />
          </div>
          <div class="form-group">
            <label for="stu-nid">الرقم القومي (14 رقماً)</label>
            <input type="text" id="stu-nid" maxlength="14" inputmode="numeric" required />
          </div>
          <div class="form-group">
            <label for="stu-grade">الصف الدراسي</label>
            <select id="stu-grade">${gradeOptions}</select>
          </div>
          <div class="form-group">
            <label for="stu-dept">القسم</label>
            <select id="stu-dept">${deptOptions}</select>
          </div>
          <div class="form-group">
            <label for="stu-phone">رقم ولي الأمر</label>
            <input type="text" id="stu-phone" placeholder="01xxxxxxxxx" required />
          </div>
          <button type="submit" class="btn-success btn-block">حفظ وتسجيل الطالب</button>
        </form>
      </div>

      <div class="card">
        <div class="card-title"><span>إضافة مدرب أو مهندس عملي</span></div>
        <form id="add-trainer-form">
          <div class="form-group">
            <label for="trn-name">الاسم الكامل</label>
            <input type="text" id="trn-name" required />
          </div>
          <div class="form-group">
            <label for="trn-nid">الرقم القومي (14 رقماً)</label>
            <input type="text" id="trn-nid" maxlength="14" inputmode="numeric" required />
          </div>
          <div class="form-group">
            <label for="trn-type">نوع المدرب</label>
            <select id="trn-type">
              <option value="theory">مدرب نظري</option>
              <option value="practical">مهندس / مدرب عملي (قسم واحد)</option>
            </select>
          </div>
          <div class="form-group" id="trn-subject-group">
            <label for="trn-subject">المواد النظرية</label>
            <input type="text" id="trn-subject" value="اللغة العربية والرياضيات" />
          </div>
          <div class="form-group hidden" id="trn-dept-group">
            <label for="trn-dept">القسم المسؤول عنه (قسم واحد)</label>
            <select id="trn-dept">${deptOptions}</select>
          </div>
          <button type="submit" class="btn-primary btn-block">حفظ واعتماد المدرب</button>
        </form>
      </div>
    </div>

    <div class="card">
      <div class="card-title"><span>الأقسام والطلاب حسب الصف الدراسي</span></div>
      <div class="filter-bar">${filterButtons}</div>
      <div class="grid-3">${deptCards}</div>
    </div>

    <div class="card">
      <div class="card-title"><span>المدربون والمهندسون المسجلون</span></div>
      <div class="grid-2">${trainerCards}</div>
    </div>
  `;
}

function bindAdminEvents() {
  const stuNid = document.getElementById("stu-nid");
  const trnNid = document.getElementById("trn-nid");
  if (stuNid) {
    stuNid.addEventListener("input", () => {
      stuNid.value = stuNid.value.replace(/\D/g, "").slice(0, 14);
    });
  }
  if (trnNid) {
    trnNid.addEventListener("input", () => {
      trnNid.value = trnNid.value.replace(/\D/g, "").slice(0, 14);
    });
  }

  const trnType = document.getElementById("trn-type");
  const trnSubjectGroup = document.getElementById("trn-subject-group");
  const trnDeptGroup = document.getElementById("trn-dept-group");
  if (trnType) {
    trnType.addEventListener("change", () => {
      const isPractical = trnType.value === "practical";
      trnSubjectGroup.classList.toggle("hidden", isPractical);
      trnDeptGroup.classList.toggle("hidden", !isPractical);
    });
  }

  document.getElementById("add-dept-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const deptName = normalizeText(document.getElementById("new-dept-name").value);
    if (!deptName) return;
    if (state.departments.includes(deptName)) {
      return showToast("هذا القسم موجود بالفعل.");
    }
    state.departments.push(deptName);
    saveState();
    showToast(`تمت إضافة القسم: ${deptName}`);
    renderDashboard();
  });

  document.getElementById("add-student-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = normalizeText(document.getElementById("stu-name").value);
    const nationalId = normalizeText(document.getElementById("stu-nid").value);
    const grade = document.getElementById("stu-grade").value;
    const department = document.getElementById("stu-dept").value;
    const guardianPhone = normalizeText(document.getElementById("stu-phone").value);

    if (!/^\d{14}$/.test(nationalId)) {
      return showToast("الرقم القومي يجب أن يتكون من 14 رقماً.");
    }
    if (state.students.some((s) => s.nationalId === nationalId)) {
      return showToast("هذا الرقم القومي مسجل لطالب آخر بالفعل.");
    }

    const practicalTrainer = state.trainers.find(
      (t) => t.type === "practical" && t.assignedDepartment === department
    );

    const newStudent = {
      id: "STU-" + Date.now(),
      name,
      nationalId,
      grade,
      department,
      guardianPhone,
      monthlyFee: 1500,
      feePaid: false,
      lastFeeNotice: `تذكير نهاية الشهر لولي الأمر (${guardianPhone}): يرجى سداد المصروفات الدراسية الشهرية وقدرها 1500 ج.م.`,
      theoryTeachers: {
        arabic: "أ. محمد حسن",
        math: "أ. محمد حسن",
        english: "أ. نهى عادل",
        science: "أ. نهى عادل",
        socialStudies: "أ. نهى عادل",
        agriculture: "أ. نهى عادل"
      },
      workshopEngineer: practicalTrainer ? practicalTrainer.name : "يُحدد حسب الجدول العملي",
      theorySchedule: [
        { day: "الأحد", subjects: ["عربي", "رياضيات", "إنجليزي"] },
        { day: "الاثنين", subjects: ["علوم", "دراسات", "زراعة"] }
      ],
      practicalDays: ["الثلاثاء", "الأربعاء", "الخميس"],
      attendance: "حاضر (0 يوم) - غياب (0 يوم) - تأخير (0 مرة)",
      behavior: "منتظم",
      grades: { examScore: 0, behaviorScore: 0, total: 0 },
      teacherNotes: "تم تسجيل الطالب حديثاً في النظام."
    };

    state.students.push(newStudent);
    saveState();
    showToast(`تم حفظ وتسجيل الطالب ${name}`);
    renderDashboard();
  });

  document.getElementById("add-trainer-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = normalizeText(document.getElementById("trn-name").value);
    const nationalId = normalizeText(document.getElementById("trn-nid").value);
    const type = document.getElementById("trn-type").value;
    const subject = normalizeText(document.getElementById("trn-subject").value) || "مواد نظرية";
    const assignedDepartment = document.getElementById("trn-dept").value;

    if (!/^\d{14}$/.test(nationalId)) {
      return showToast("الرقم القومي يجب أن يتكون من 14 رقماً.");
    }
    if (state.trainers.some((t) => t.nationalId === nationalId)) {
      return showToast("هذا الرقم القومي مسجل لمدرب آخر بالفعل.");
    }

    const newTrainer = {
      id: "TRN-" + Date.now(),
      name,
      nationalId,
      type,
      subject: type === "theory" ? subject : "تدريب عملي وورش تخصصية",
      assignedDepartment: type === "practical" ? assignedDepartment : "",
      schedule:
        type === "theory"
          ? [
              { day: "الأحد", grade: GRADES[0], slot: "الحصة الأولى", topic: subject },
              { day: "الاثنين", grade: GRADES[1], slot: "الحصة الثانية", topic: subject }
            ]
          : []
    };

    state.trainers.push(newTrainer);
    saveState();
    showToast(`تم حفظ واعتماد ${name}`);
    renderDashboard();
  });

  document.querySelectorAll("[data-grade-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      adminGradeFilter = btn.dataset.gradeFilter;
      renderDashboard();
    });
  });

  document.getElementById("main-content").addEventListener("click", (e) => {
    const target = e.target.closest("button");
    if (!target) return;
    const action = target.dataset.action;
    if (!action) return;

    if (action === "toggle-nid-view") {
      const key = target.dataset.nidKey;
      if (revealedNids.has(key)) revealedNids.delete(key);
      else revealedNids.add(key);
      renderDashboard();
      return;
    }

    if (action === "copy-nid") {
      const val = target.dataset.nidVal;
      navigator.clipboard?.writeText(val).catch(() => {});
      showToast("تم نسخ الرقم القومي");
      return;
    }

    if (action === "delete-dept") {
      const dept = target.dataset.dept;
      state.departments = state.departments.filter((d) => d !== dept);
      saveState();
      showToast(`تم حذف القسم: ${dept}`);
      renderDashboard();
      return;
    }

    if (action === "delete-student") {
      const id = target.dataset.studentId;
      state.students = state.students.filter((s) => s.id !== id);
      saveState();
      showToast("تم حذف الطالب من النظام");
      renderDashboard();
      return;
    }

    if (action === "delete-trainer") {
      const id = target.dataset.trainerId;
      state.trainers = state.trainers.filter((t) => t.id !== id);
      saveState();
      showToast("تم حذف المدرب من النظام");
      renderDashboard();
      return;
    }

    if (action === "toggle-fee") {
      const id = target.dataset.studentId;
      const st = state.students.find((s) => s.id === id);
      if (!st) return;
      st.feePaid = !st.feePaid;
      st.lastFeeNotice = st.feePaid
        ? `تم تأكيد سداد المصروفات الشهرية (1500 ج.م) لولي الأمر (${st.guardianPhone}).`
        : `تذكير نهاية الشهر لولي الأمر (${st.guardianPhone}): يرجى سداد المصروفات الدراسية الشهرية وقدرها 1500 ج.م.`;
      saveState();
      showToast(`تم تحديث حالة مصروفات ${st.name}`);
      renderDashboard();
      return;
    }

    if (action === "send-fee-reminder") {
      const id = target.dataset.studentId;
      const st = state.students.find((s) => s.id === id);
      if (!st) return;
      st.lastFeeNotice = `تنبيه نهاية الشهر لولي الأمر على الرقم (${st.guardianPhone}): مستحق سداد المصروفات الدراسية وقدرها 1500 ج.م.`;
      saveState();
      showToast(`تم إرسال تذكير المصروفات (1500 ج.م) إلى ${st.guardianPhone}`);
      renderDashboard();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLoginUI();
});
