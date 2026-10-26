import subprocess

for pid in ["7940", "3224"]:
    try:
        res = subprocess.run(["taskkill", "/F", "/PID", pid], capture_output=True, text=True)
        print(f"Killed {pid}: {res.stdout.strip()} {res.stderr.strip()}")
    except Exception as e:
        print(f"Error killing {pid}: {e}")
